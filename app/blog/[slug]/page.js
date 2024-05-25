import { notFound } from "next/navigation"

export default function BlogPage({ params }) {
    console.log("/^[a-z]{0,10}+$/ ")
    if (!['elfeneri-pil', 'pil-kimyasi'].includes(params.slug)) {
        notFound();
    }
    return (
        <>
            Buraya bu yazi route parametresinden geliyor.... <hr />&#34;{params.slug}&#34;
        </>
    )
}
