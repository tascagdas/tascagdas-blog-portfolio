import H1 from "@/components/h1";
import { getPosts } from "@/lib/posts";
import Link from "next/link";


export default async function Home() {

  const { posts } = await getPosts({
    newest: true,
    limit:3
  });
  return (
    <>
      <section className="mb-8">
        <H1>Sayfama Hoş Geldiniz!!</H1>
        <p>Benim adım Çağdaş, junior Full Stack Web Developer'ım </p>
        <p><Link href="/about/projects" className=" underline hover:text-green-700 hover:no-underline">Projelerimi</Link>, <Link href="/photos" className=" underline hover:no-underline hover:text-green-700">Fotoğraflarımı</Link> ve <Link href="/blog" className=" underline hover:no-underline hover:text-green-700">Blog</Link> yazılarıma göz atabilirsiniz.</p>
      </section>
      
      <section>
        <h2 className="text-lg mb-8">Blogda son yayınlananlar</h2>
        <ul>
          {posts.map(post => <li key={post.slug}>
            <span className="text-gray-400">{post.frontmatter.date}&nbsp;</span>
              <Link className="underline hover:no-underline" href={`/blog/${post.slug}`}>{post.frontmatter.title }</Link>
            
          </li>)}
        </ul>
      </section>

    </>
  );
}
