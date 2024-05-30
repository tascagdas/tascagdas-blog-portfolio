import React from 'react'
import fs from 'fs'
import path from 'path'
import { getPost } from '@/lib/posts'
import Link from 'next/link'

const BlogPostsPage = async () => {

    const files = fs.readdirSync(
        path.join(process.cwd(),'content')
    )


    const posts = await Promise.all(files.map(async fileName => {
        const { frontmatter } = await getPost(fileName)
        return {
            frontmatter,
            slug: fileName.replace('.mdx', '')
        }
    }))

  return (
      <>
          <h1 className='mb-8 text-xl'>Son postlar</h1>
          <div className='text-lg  text-gray-600 dark:text-gray-400 mb-8'>Guncel postlar icin...</div>
          <hr />
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {
                  posts.map(post => (
                      <li className='text-2xl font-semibold text-gray-800 dark:text-gray-200' key={post.slug}>
                          <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                          <div className='text-gray-400 text-sm mt-2'>{post.frontmatter.date}</div>
                      </li>
                  ))
              }
          </ul>
    </>
  )
}

export default BlogPostsPage