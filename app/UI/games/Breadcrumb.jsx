'use client'
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb(){
    let params = useSearchParams();

    return(
        <p className="mb-3">
            Sports {params.sport}
            {
                params.get('sport') && <Link href={`/sports?sport=${params.get('sport')}`} className="ml-2"> / <span className="text-primary-light ml-2">{params.get('sport')}</span></Link>
            }
            {
                params.get('category') && <span className="ml-2"> / <span className="text-primary-light ml-2">{params.get('category')}</span></span>
            }
        </p>
    )
}