'use client'
export default function Search({search, setSearch}){
    return(
        <div className="flex items-center bg-primary-dark rounded-lg p-1 h-full w-full border-primary-light/50 border-2 mb-8">
            <div className="icon-[weui--search-outlined] text-gray-500 lg:w-5 2xl:w-8 lg:h-5 2xl:h-8 mr-1"/>
            <input className="bg-transparent h-full rounded-full w-full" type="search" placeholder="Search" name="" id="" value={search} onChange={e=>{setSearch(e.target.value)}} />
        </div>
    )
}