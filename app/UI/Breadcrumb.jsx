'use client'
import { useSearchParams } from "next/navigation";

export default function Breadcrumb(){
    let params = useSearchParams();

    return(
        <p className="mb-3">
            Sports {params.sport}
            {
                params.get('sport') && <span className="ml-2"> / <span className="text-primary-light ml-2">{params.get('sport')}</span></span>
            }
            {
                params.get('category') && <span className="ml-2"> / <span className="text-primary-light ml-2">{params.get('category')}</span></span>
            }
        </p>
    )
}