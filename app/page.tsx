import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Home() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as { title: string; date: string; excerpt: string }),
    }
  }).sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any))

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-full mb-8">
        <h1 className="text-4xl font-bold text-pink-800 dark:text-pink-300 mb-4">Welcome to My Personal Website</h1>
        <p className="text-lg text-pink-600 dark:text-pink-400">Explore my thoughts and experiences through my blog.</p>
      </div>
      
      {/* 8/12 section for latest blog posts */}
      <div className="col-span-12 lg:col-span-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-800 dark:text-pink-300 mb-4">Latest Blog Posts</h2>
          <ul className="space-y-4">
            {posts.slice(0, 5).map((post) => (
              <li key={post.id} className="border-b border-pink-100 dark:border-pink-800 pb-4 last:border-b-0">
                <Link href={`/blog/${post.id}`} className="block hover:bg-pink-50 dark:hover:bg-pink-900 transition duration-150 ease-in-out p-2 rounded">
                  <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300">{post.title}</h3>
                  <p className="text-sm text-pink-500 dark:text-pink-400">{post.date}</p>
                  <p className="text-pink-600 dark:text-pink-300 mt-2">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
      
      {/* 4/12 section for About Me */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-800 dark:text-pink-300 mb-4">About Me</h2>
          <Image
            src="https://picsum.photos/seed/chi-tran/200/200"
            alt="Chi Tran"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-4"
          />
          <p className="text-pink-700 dark:text-pink-300 mb-4">
            Hi, I'm Chi Tran, a Junior Software Engineer based in Berlin. I specialize in frontend and backend development, with expertise in TypeScript, Angular, React, Kotlin, and Java Spring Boot.
          </p>
          <Button asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

