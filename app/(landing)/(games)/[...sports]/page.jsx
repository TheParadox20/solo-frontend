'use client'
import { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";
import Spinner from "@/app/UI/body/Spinner";
import Breadcrumb from "@/app/UI/games/Breadcrumb";
import Categories from "@/app/UI/games/Categories";
import Game from "@/app/UI/games/Game";
import Search from "@/app/UI/body/Search";

export default function Page({params}) {
  let [search, setSearch] = useState('');
  let path = params['sports'].map((param,i)=>{
    return param.replaceAll('%20',' ')
  })
  let { data, error, isLoading, mutate } = useSWR(['/games',{path:path.join('/'),search}], fetcher);

  useEffect(()=>{
    if(search.split(' ').length % 3 === 0){
      mutate()
    }
  },[search, mutate]) // Added `mutate` to the dependency array

  if(error) return <p>Error fetching games</p>
  let games = data?.games;
  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <Breadcrumb path={path} />
      <div className="flex justify-between items-center">
        <Categories path={path} categories={data?.categories} />
        <select className="border-primary-light/50 border-2 rounded-lg px-3 h-12 font-semibold w-32" value={""} name="market" id="">
          <option value="">Markets</option>
          <option className="bg-primary-light" value="3 Way">3 Way</option>
        </select>
      </div>
      {
        isLoading ?
        <Spinner full={false}/>
        :
        games && Object.keys(games).map((date,i)=>{
          return (
            <div key={i}>
              <h1 className="2xl:text-xl font-bold my-4">{date}</h1>
              <div className="bg-primary-base mb-8 px-5 md:px-8 pb-10 pt-2 rounded-lg">
                {
                  games[date].map((game,j)=>{
                    return <div key={j} className="my-4"><Game data={game}/></div>
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
