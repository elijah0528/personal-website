import { getBlogPost, getAllBlogSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import FancyLink from "@/components/FancyLink";
import rehypeHighlight from "rehype-highlight";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-2xl font-bold text-accent-foreground mb-4" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-xl font-bold text-accent-foreground mb-3 mt-8" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-lg font-semibold text-accent-foreground mb-2 mt-6" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-accent-foreground mb-8 leading-relaxed" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="text-accent-foreground mb-4 ml-6 list-disc" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="text-accent-foreground mb-4 ml-6 list-decimal" {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="mb-1" {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-bold" {...props} />,
  em: (props: React.HTMLAttributes<HTMLElement>) => <em className="italic" {...props} />,
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !props.className?.includes('language-');
    if (isInline) {
      return <code className="bg-muted/60 mx-1 px-2 py-1 rounded-lg text-sm font-mono text-accent-foreground font-medium border border-border" {...props} />;
    }
    return <code className="font-mono text-sm" {...props} />;
  },
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-gradient-to-br from-muted/70 to-muted/60 backdrop-blur-lg p-6 pt-12 rounded-xl overflow-x-auto mb-6 border border-border/50 shadow-sm relative group" {...props}>
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-3 h-3 rounded-full bg-red-400 mr-2 inline-block"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2 inline-block"></div>
        <div className="w-3 h-3 rounded-full bg-green-400 inline-block"></div>
      </div>
      {props.children}
    </pre>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground mb-4" {...props} />,
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => <a className="text-accent-foreground underline hover:text-accent-foreground/80 transition-colors" {...props} />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    if (!props.src || typeof props.src !== 'string') return null;
    
    return (
      <Image 
        src={props.src}
        alt={props.alt || ""} 
        width={800}
        height={400}
        className="w-full h-auto rounded-lg shadow-md my-6 block" 
        style={{ objectFit: 'contain' }}
        priority
        unoptimized 
      />
    );
  },
};

export async function generateStaticParams() {
  const posts = getAllBlogSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex w-full min-h-screen flex-col items-center font-sans px-8">
      <div className="z-50 flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-md md:w-3/4 lg:w-1/2">
        <FancyLink 
          href="/" 
          className="text-accent-foreground/80 hover:text-accent-foreground transition-colors hover:!translate-x-0"
        >
          Back to Home
        </FancyLink>
        <article className="flex w-full flex-col gap-8">
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-accent-foreground">{post.title}</h1>
            <p className="text-muted-foreground">{post.date}</p>
            <p className="text-accent-foreground text-lg">{post.description}</p>
          </header>
          <div className="prose prose-lg max-w-none">
            <MDXRemote 
              source={post.content} 
              components={components}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>
        </article>
      </div>
    </main>
  );
}