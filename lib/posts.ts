import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts(): Post[] {
  // Get all markdown files from the posts directory
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove .md extension to get the id
      const id = fileName.replace(/\.md$/, '');
      
      // Read markdown file
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Parse frontmatter
      const { data, content } = matter(fileContents);
      
      return {
        id,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        content,
      };
    });
  
  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostById(id: string): Post | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    
    return {
      id,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      content,
    };
  } catch (error) {
    return undefined;
  }
}

export function getAllPostIds(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}
