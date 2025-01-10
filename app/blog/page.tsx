import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <h1 className="col-span-full text-4xl font-bold text-pink-800 mb-8">Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-pink-800 mb-2">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </h2>
          <p className="text-pink-600 mb-4">{post.date}</p>
          <p className="text-pink-700">{post.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

