'use client'

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

export default function Pagination({ pageCount }) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const page = Number(searchParams.get('page') ?? 1)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <ul className="flex justify-center space-x-4 font-mono text-lg">
            {pages.map(pageNumber => {
                const params = new URLSearchParams(searchParams)
                params.set('page', pageNumber.toString())
                return (<li key={pageNumber}>
                    <Link
                        className={`${pageNumber == page ? 'decoration-gray-400 underline-offset-4 underline decoration-4' : ''}`}
                        href={`${pathname}?${params.toString()}`}>
                        {pageNumber}
                    </Link>
                </li>)
            })}
        </ul>
    )
}