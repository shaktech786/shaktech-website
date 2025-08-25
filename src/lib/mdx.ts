import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  readTime?: number;
  published: boolean;
  featured?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

// Ensure the content directory exists
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

export async function getAllPosts(): Promise<PostMeta[]> {
  // Return empty array if directory doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        date: data.date || new Date().toISOString(),
        author: data.author || 'Shakeel Bhamani',
        tags: data.tags || [],
        image: data.image,
        readTime: Math.ceil(stats.minutes),
        published: data.published !== false,
        featured: data.featured || false,
      } as PostMeta;
    })
    .filter(post => post.published)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return allPostsData;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Shakeel Bhamani',
      tags: data.tags || [],
      image: data.image,
      readTime: Math.ceil(stats.minutes),
      published: data.published !== false,
      featured: data.featured || false,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<PostMeta[]> {
  const allPosts = await getAllPosts();
  const currentPost = allPosts.find(post => post.slug === currentSlug);
  
  if (!currentPost) {
    return [];
  }

  // Simple related posts algorithm based on shared tags
  const postsWithRelevance = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
      return {
        ...post,
        relevance: sharedTags.length,
      };
    })
    .filter(post => post.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit);
  
  // Extract just the PostMeta properties, removing relevance
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const relatedPosts: PostMeta[] = postsWithRelevance.map(({ relevance, ...post }) => post);

  // If not enough related posts, fill with recent posts
  if (relatedPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post => 
        post.slug !== currentSlug && 
        !relatedPosts.find(p => p.slug === post.slug)
      )
      .slice(0, limit - relatedPosts.length);
    
    relatedPosts.push(...recentPosts);
  }

  return relatedPosts;
}