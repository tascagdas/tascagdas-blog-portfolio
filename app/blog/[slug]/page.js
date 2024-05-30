import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import fs from 'fs'
import path from "path"

const titles = {
    'elfeneri-pil': 'Hello elfeneri-pil!',
    'pil-kimyasi':'Hello pil-kimyasi!'
}

export async function generateMetadata({ params, searchParams }, parent) {
    const description=(await parent).description??'default description'
    return {
        title: titles[params.slug],
        description
    }
}

export default function BlogPage({ params }) {
    // if (!['elfeneri-pil', 'pil-kimyasi'].includes(params.slug)) {
    //     notFound();
    // }

    let markdown

    try {
        markdown = fs.readFileSync(
            path.join(process.cwd(), 'content', `${params.slug}.mdx`)
        )
    } catch (e) {
        notFound()
    }
    return (
        <article className="prose dark:prose-invert">
            <MDXRemote source={markdown} />
        </article>
    )
}
