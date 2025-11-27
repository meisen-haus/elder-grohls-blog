# Simple Blog

A modern, beautiful blog built with Next.js 14, React, and TypeScript.

## Features

- ✨ Clean and modern UI design
- 📱 Fully responsive layout
- ⚡ Static site generation for optimal performance
- 🎨 Custom CSS styling with modern design principles
- 📝 Sample blog posts included
- 🔍 SEO-friendly with metadata generation
- 📄 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the blog.

## Available Scripts

- **`npm run dev`** - Start the development server
- **`npm run build`** - Create a production build
- **`npm start`** - Run the production build locally
- **`npm run lint`** - Run ESLint to check for code issues
- **`npm run new-post "Title"`** - Create a new blog post with scaffolding

## Project Structure

```
blog/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with header and navigation
│   ├── page.tsx           # Homepage with post list
│   ├── globals.css        # Global styles and markdown styling
│   ├── about/
│   │   └── page.tsx       # About page
│   └── posts/
│       └── [id]/
│           └── page.tsx   # Individual post page (dynamic route)
├── lib/
│   └── posts.ts           # Blog post utilities and data fetching
├── posts/                 # Markdown blog posts directory
│   ├── getting-started-with-nextjs.md
│   ├── the-power-of-typescript.md
│   ├── building-beautiful-uis-with-css.md
│   └── understanding-react-hooks.md
├── scripts/
│   └── new-post.js        # Script to create new blog posts
├── package.json
├── tsconfig.json
└── next.config.js
```

## Adding New Blog Posts

### Using the New Post Script (Recommended)

The easiest way to create a new blog post is to use the built-in script:

```bash
npm run new-post "Your Blog Post Title"
```

This will automatically:
- Create a new markdown file in the `posts/` directory
- Generate a URL-friendly slug from your title (e.g., "This is My Post" → `this-is-my-post.md`)
- Add frontmatter with the current date
- Include a starter template with examples

**Example:**

```bash
npm run new-post "Getting Started with React Hooks"
```

This creates `posts/getting-started-with-react-hooks.md` with all the scaffolding ready to go!

### Manual Creation

You can also manually create a new markdown file in the `posts/` directory with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-01-20"
author: "Your Name"
excerpt: "A brief description of your post that appears in the post list."
---

Your post content goes here in **Markdown** format!

## You can use headings

- Lists
- Code blocks
- And all other markdown features!

\`\`\`javascript
const example = "code block";
\`\`\`
```

The filename (without `.md`) will become the URL slug for your post. For example, `my-awesome-post.md` will be accessible at `/posts/my-awesome-post`.

## Building for Production

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

## Customization

### Styling

All styles are located in `app/globals.css`. The blog uses CSS custom properties (variables) for easy theming:

```css
:root {
  --primary-color: #2563eb;
  --text-color: #1f2937;
  --text-light: #6b7280;
  --bg-color: #ffffff;
  --bg-secondary: #f9fafb;
  --border-color: #e5e7eb;
}
```

Modify these variables to change the color scheme of your blog.

### Metadata

Update the site metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Blog Name',
  description: 'Your blog description',
}
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Markdown** - Markdown rendering
- **gray-matter** - Frontmatter parsing
- **CSS3** - Styling with modern features

## License

MIT

## Contributing

Feel free to fork this project and customize it for your own use!

