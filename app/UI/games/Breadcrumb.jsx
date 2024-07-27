'use client'
import Link from "next/link";

export default function Breadcrumb({path}){
    return(
        <p className="mb-3">
            Sports
            {
                path.slice(1,).map((item,i)=>{
                    return (<Link key={i} href={`/${path.slice(0,i+2).join('/')}`} className="ml-2"> / <span className="text-primary-light ml-2">{item}</span></Link>)
                })
            }
        </p>
    )
}