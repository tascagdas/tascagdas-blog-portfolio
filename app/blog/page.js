import React from 'react'
import fs from 'fs'
import path from 'path'
import { getPost } from '@/lib/posts'

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
          <h1>Son postlar</h1>
          
    </>
  )
}

export default BlogPostsPage