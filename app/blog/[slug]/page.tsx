import { getBlogPost, getAllBlogSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-2xl font-bold text-accent-foreground mb-4" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-xl font-bold text-accent-foreground mb-3 mt-8" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-lg font-semibold text-accent-foreground mb-2 mt-6" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-accent-foreground mb-4 leading-relaxed" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="text-accent-foreground mb-4 ml-6 list-disc" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="text-accent-foreground mb-4 ml-6 list-decimal" {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="mb-1" {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-bold" {...props} />,
  em: (props: React.HTMLAttributes<HTMLElement>) => <em className="italic" {...props} />,
  code: (props: React.HTMLAttributes<HTMLElement>) => <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono" {...props} />,
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground mb-4" {...props} />,
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => <a className="text-accent-foreground underline hover:text-accent-foreground/80 transition-colors" {...props} />,
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
        <article className="flex w-full flex-col gap-8">
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-accent-foreground">{post.title}</h1>
            <p className="text-muted-foreground">{post.date}</p>
            <p className="text-accent-foreground text-lg">{post.description}</p>
          </header>
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>
        </article>
      </div>
    </main>
  );
}