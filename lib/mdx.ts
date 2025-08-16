import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogCardProps } from './types';

// Types for better type safety
interface BlogFrontmatter {
  title: string;
  date: string;
  description: string;
  slug: string;
}

interface BlogPost extends BlogCardProps {
  content: string;
}

interface BlogSlug {
  slug: string;
}

// Constants
const CONTENT_DIRECTORY = path.join(process.cwd(), 'app', 'blog', 'content');
const MDX_EXTENSION = '.mdx';

// Helper functions
const isMdxFile = (fileName: string): boolean => fileName.endsWith(MDX_EXTENSION);

const extractSlugFromFileName = (fileName: string): string => 
  fileName.replace(new RegExp(`\\${MDX_EXTENSION}$`), '');

const sortPostsByDateDesc = (a: BlogCardProps, b: BlogCardProps): number => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
};

const validateFrontmatter = (data: unknown): data is BlogFrontmatter => {
  const frontmatter = data as Partial<BlogFrontmatter>;
  return !!(
    frontmatter &&
    typeof frontmatter.title === 'string' &&
    typeof frontmatter.date === 'string' &&
    typeof frontmatter.description === 'string' &&
    typeof frontmatter.slug === 'string'
  );
};

const readMdxFile = (fullPath: string): matter.GrayMatterFile<string> | null => {
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return matter(fileContents);
  } catch (error) {
    console.error(`Error reading MDX file at ${fullPath}:`, error);
    return null;
  }
};

// Public API functions
export const getAllBlogPosts = (): BlogCardProps[] => {
  try {
    const fileNames = fs.readdirSync(CONTENT_DIRECTORY);
    
    const allPostsData = fileNames
      .filter(isMdxFile)
      .map((fileName): BlogCardProps | null => {
        const slug = extractSlugFromFileName(fileName);
        const fullPath = path.join(CONTENT_DIRECTORY, fileName);
        const matterResult = readMdxFile(fullPath);
        
        if (!matterResult || !validateFrontmatter(matterResult.data)) {
          console.warn(`Invalid frontmatter in file: ${fileName}`);
          return null;
        }

        return {
          slug,
          title: matterResult.data.title,
          date: matterResult.data.date,
          description: matterResult.data.description,
        };
      })
      .filter((post): post is BlogCardProps => post !== null);

    return allPostsData.sort(sortPostsByDateDesc);
  } catch (error) {
    console.error('Error reading blog posts directory:', error);
    return [];
  }
};

export const getBlogPost = (slug: string): BlogPost | null => {
  if (!slug || typeof slug !== 'string') {
    return null;
  }

  const fullPath = path.join(CONTENT_DIRECTORY, `${slug}${MDX_EXTENSION}`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const matterResult = readMdxFile(fullPath);
  
  if (!matterResult || !validateFrontmatter(matterResult.data)) {
    console.warn(`Invalid frontmatter in blog post: ${slug}`);
    return null;
  }

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    content: matterResult.content,
  };
};

export const getAllBlogSlugs = (): BlogSlug[] => {
  try {
    const fileNames = fs.readdirSync(CONTENT_DIRECTORY);
    return fileNames
      .filter(isMdxFile)
      .map((fileName): BlogSlug => ({
        slug: extractSlugFromFileName(fileName),
      }));
  } catch (error) {
    console.error('Error reading blog slugs:', error);
    return [];
  }
};

// Helper function to check if content directory exists
export const validateContentDirectory = (): boolean => {
  return fs.existsSync(CONTENT_DIRECTORY);
};