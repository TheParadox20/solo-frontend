'use client'
import Link from "next/link";
import { toggle } from "@/app/lib/controlls";

export default function Categories({categories, path}){
    let sports = ['Football','Basketball','Tennis','Rugby','Cricket','Volleyball', 'Baseball', 'Ice Hockey', 'Table tennis', 'Boxing', 'Darts', 'Water polo', 'eSoccer']
    return(
        <div className="">
            <button className="text-xl 2xl:text-2xl 2xl:my-5 font-bold flex items-center w-fit justify-between gap-4 relative max-w-1/2 truncate" onClick={e=>toggle('categoriesDropDown')}> <span className="truncate max-w-1/2 overflow-hidden">{path.length>1?path[path.length-1]:'All'}</span> <span className="icon-[ep--arrow-down] w-6 h-6"/></button>
            <div id="categoriesDropDown" className="large-scroll bg-primary-base shadow-lg shadow-primary-light w-52 max-h-80 md:max-h-96 overflow-y-scroll absolute rounded-lg px-1 py-2 hidden">
                {
                    path.length!=1 && categories?
                    categories.map((cat,i)=>{
                        console.log('%%% :: ',path)
                        let link = path?.slice(1,2).join('/')+'/'+cat
                        console.log('%%% :: ',link)
                        return (<Link key={i} href={link} className={`block text-sm p-2 rounded-md ${path[path.length-1]==cat?'bg-primary-light':null}`} onClick={e=>toggle('categoriesDropDown')}>{cat}</Link>)
                    })
                    :
                    sports.map((cat,i)=>(<Link key={i} href={`/sports/${cat}`} className={`block text-sm p-2 rounded-md ${path[path.length-1]==cat?'bg-primary-light':null}`} onClick={e=>toggle('categoriesDropDown')}>{cat}</Link>))
                }
            </div>
        </div>
    )
}