import H1 from "@/components/h1";
import { getPosts } from "@/lib/posts";
import Image from "next/image";
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
        <p>Benim adım Çağdaş, Full Stack Web Developer&apos;ım </p>
        <p><Link href="/about/projects" className=" underline hover:text-green-700 hover:no-underline">Projelerimi</Link>, <Link href="/photos" className=" underline hover:no-underline hover:text-green-700">Fotoğraflarımı</Link> ve <Link href="/blog" className=" underline hover:no-underline hover:text-green-700">Blog</Link> yazılarıma göz atabilirsiniz.</p>
      </section>
      <hr />
      <section>
        <h5>
          Haziran 2024 tarihinde yapmış olduğum finans uygulamasına aşağıdaki linkten ulaşabilirsiniz.
        </h5>
        <br />
        <Link className="text-3xl mt-5 text-emerald-300 underline hover:no-underline" href="https://tas-finans.vercel.app">Taş Finans</Link>
        <p className="mt-4">Bu uygulamada aşağıdaki teknolojiler kullanılmıştır.</p>
        <ul className="list-disc">   
          <li>Next.js</li>
          <li>Tailwind</li>
          <li>Supabase</li>
          <li>Postgres</li>
          <li>Vercel</li>
          <li>Zod</li>
          <li>Faker</li>
        </ul>
        <hr />
        <h3 className="text-4xl mb-4">Github</h3>
        <p>Yapmış olduğum projeleri Github profilimde görmek için <Link className="underline hover:no-underline" href="https://github.com/tascagdas">Buraya</Link> tıklayabilirsiniz.</p>
        <Image
          className="my-4"
          width={495}
          height={195}
          alt="Cagdas Tas github istatikleri"
          unoptimized
          src="https://camo.githubusercontent.com/87cf6a552638dfcc0127f07932a6986a443d73b361539556cb908cc939fcd6e3/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d74617363616764617326" />
        <Image
          className="my-4"
          width={300}
          height={165}
          alt="Cagdas Tas github dil istatikleri"
          unoptimized
          src="https://camo.githubusercontent.com/c793eecd194dc9bd254a16bc59d6a77ce84f5228f824a263da77ad957800d556/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d7461736361676461732673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" />
        <Image
          className="my-4"
          width={495}
          height={195}
          alt="Cagdas Tas github istatikleri"
          unoptimized
          src="https://camo.githubusercontent.com/ca8b78e4669bdf5c44aa4895b29715c58e2e230e2db216d906720e273f037b46/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d7461736361676461732673686f775f69636f6e733d74727565266c6f63616c653d656e" />

      </section>
      <hr />
      <section>
        <h2 className="text-lg my-8">Blogda son yayınlananlar</h2>
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
