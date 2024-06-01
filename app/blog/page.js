import React from 'react'
import { getPosts } from '@/lib/posts'
import Link from 'next/link'
import Pagination from '@/components/pagination';
import H1 from '@/components/h1';

const BlogPostsPage = async ({
    searchParams
}) => {
    const tags = searchParams.tags?.split(',');
    const order = searchParams.order ?? 'newest';
    const page = searchParams.page ?? 1;
    const limit = searchParams.limit ?? 4;
    const {posts,pageCount} = await getPosts(
        {
            tags,
            newest: order === 'newest',
            page,
            limit
        }
    );

  return (
      <>
          <H1>Güncel içerikler</H1>
          <div className='text-lg  text-gray-600 dark:text-gray-400 mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, quaerat. Pariatur tempora reprehenderit voluptas consectetur autem iste, fugiat hic fuga ab, quidem maxime ullam blanditiis?</div>
          <hr />

          <div className='mb-8'>
              Önce&nbsp;
              {order === 'newest' && <Link href="/blog?order=oldest" className='underline'>Eski</Link>}
              {order === 'oldest' && <Link href="/blog?order=newest" className='underline'>Yeni</Link>}
          </div>
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

          <div className='mt-8'>
              <Pagination pageCount={pageCount}/>
          </div>
    </>
  )
}

export default BlogPostsPage