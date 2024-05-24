import { notFound } from "next/navigation"

export default function BlogPage({ params }) {
    if (!['first', 'second'].includes(params.slug)) {
        notFound();
    }
    return (
        <>
            Buraya bu yazi route parametresinden geliyor.... <hr />&#34;{params.slug}&#34;
        </>
    )
}
