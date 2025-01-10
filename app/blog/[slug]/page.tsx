import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ReadingProgress from '@/components/reading-progress'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }))
}

function getPostData(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return matter(fileContents)
}

function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const { data } = getPostData(slug)
    return { slug, ...(data as { title: string; date: string }) }
  }).sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const matterResult = getPostData(params.slug)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(post => post.slug === params.slug)
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <>
      <ReadingProgress />
      <div className="max-w-3xl mx-auto">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-pink-800 dark:text-pink-300 mb-4">{matterResult.data.title}</h1>
          {matterResult.data.coverImage && (
            <Image
              src={matterResult.data.coverImage}
              alt={matterResult.data.title}
              width={800}
              height={400}
              className="rounded-lg mb-6"
            />
          )}
          <div className="flex items-center mb-6">
            <Image
              src="https://picsum.photos/seed/author/200/200"
              alt="Author"
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-pink-700 dark:text-pink-300">Chi Tran</p>
              <p className="text-sm text-pink-500 dark:text-pink-400">{matterResult.data.date}</p>
            </div>
          </div>
          <div 
            className="prose prose-pink dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }} 
          />
        </article>

        <div className="flex justify-between items-center mt-8">
          {previousPost ? (
            <Button asChild variant="outline">
              <Link href={`/blog/${previousPost.slug}`} className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous: {previousPost.title}
              </Link>
            </Button>
          ) : (
            <div></div>
          )}
          {nextPost && (
            <Button asChild variant="outline">
              <Link href={`/blog/${nextPost.slug}`} className="flex items-center">
                Next: {nextPost.title}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

