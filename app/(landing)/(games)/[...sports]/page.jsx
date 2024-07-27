'use client'
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";
import Spinner from "@/app/UI/body/Spinner";
import Breadcrumb from "@/app/UI/games/Breadcrumb";
import Categories from "@/app/UI/games/Categories";
import Game from "@/app/UI/games/Game";

export default function Page({params}) {
  let path = params['sports'].map((param,i)=>{
    return param.replaceAll('%20',' ')
  })
  let { data, error, isLoading } = useSWR(['/games',{path:path.join('/')}], fetcher);

  if(isLoading) return <Spinner full={false}/>
  if(error) return <p>Error fetching games</p>
  let games = data.games
  return (
    <div>
      <Breadcrumb path={path} />
      <Categories path={path} categories={data.categories} />
      {
        Object.keys(games).map((date,i)=>{
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