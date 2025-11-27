#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the title from command line arguments
const args = process.argv.slice(2);
const title = args.join(' ');

if (!title) {
  console.error('❌ Error: Please provide a title for your blog post.');
  console.log('\nUsage: npm run new-post "Your Blog Post Title"');
  process.exit(1);
}

// Slugify the title
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-')  // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '');  // Remove leading/trailing hyphens
}

// Get current date in YYYY-MM-DD format
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Generate the slug
const slug = slugify(title);
const date = getCurrentDate();

// Create the markdown template
const template = `---
title: "${title}"
date: "${date}"
author: "Your Name"
excerpt: "Add a brief description of your post here."
---

Write your blog post content here using **Markdown** formatting!

## Getting Started

You can use headings, lists, code blocks, and more.

### Example Code Block

\`\`\`javascript
const example = "Hello, World!";
console.log(example);
\`\`\`

### Lists

- First item
- Second item
- Third item

### Links and Emphasis

You can add [links](https://example.com) and use *italic* or **bold** text.

## Conclusion

Happy writing!
`;

// Define the posts directory and file path
const postsDir = path.join(process.cwd(), 'posts');
const filePath = path.join(postsDir, `${slug}.md`);

// Check if file already exists
if (fs.existsSync(filePath)) {
  console.error(`❌ Error: A post with the slug "${slug}" already exists.`);
  console.log(`   File: ${filePath}`);
  process.exit(1);
}

// Ensure posts directory exists
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// Write the file
try {
  fs.writeFileSync(filePath, template, 'utf8');
  console.log('✅ New blog post created successfully!');
  console.log('');
  console.log(`   Title: ${title}`);
  console.log(`   Slug:  ${slug}`);
  console.log(`   File:  posts/${slug}.md`);
  console.log(`   URL:   /posts/${slug}`);
  console.log('');
  console.log('📝 Edit your post and update the author and excerpt fields.');
} catch (error) {
  console.error('❌ Error creating file:', error.message);
  process.exit(1);
}

