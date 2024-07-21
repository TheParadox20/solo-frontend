'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toggle } from "@/app/lib/controlls";

export default function Categories(){
    let params = useSearchParams();
    let category = params.get('category');
    let sport = params.get('sport');
    let categories = ['Premier League','Champions League','La Liga','Serie A','Bundesliga','Ligue 1']
    let sports = ['Football','Basketball','Tennis','Rugby','Cricket','Volleyball', 'Baseball', 'Ice Hockey', 'Table tennis', 'Boxing', 'Darts', 'Water polo', 'eSoccer']
    return(
        <>
        <button className="text-xl 2xl:text-2xl 2xl:my-5 font-bold flex items-center w-fit justify-between gap-4 relative" onClick={e=>toggle('categoriesDropDown')}>{category?category:'All'} <span className="icon-[ep--arrow-down] w-6 h-6"/></button>
        <div id="categoriesDropDown" className="large-scroll bg-primary-base shadow-lg shadow-primary-light w-52 max-h-80 md:max-h-96 overflow-y-scroll absolute rounded-lg px-1 py-2 hidden">
            {
                sport?
                categories.map((cat,i)=>(<Link key={i} href={`/sports?sport=${sport}&category=${cat}`} className={`block text-sm p-2 rounded-md ${category==cat?'bg-primary-light':null}`} onClick={e=>toggle('categoriesDropDown')}>{cat}</Link>))
                :
                sports.map((cat,i)=>(<Link key={i} href={`/sports?sport=${cat}`} className={`block text-sm p-2 rounded-md ${category==cat?'bg-primary-light':null}`} onClick={e=>toggle('categoriesDropDown')}>{cat}</Link>))
            }
        </div>
        </>
    )
}