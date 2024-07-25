'use client'
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";
import Spinner from "@/app/UI/Spinner";
import Breadcrumb from "@/app/UI/Breadcrumb";
import Categories from "@/app/UI/Categories";
import Game from "@/app/UI/Game";

export default function Page() {
  let params = useSearchParams();
  let category = params.get('category');
  let sport = params.get('sport');
  let { data, error, isLoading } = useSWR(['/games',{sport, category}], fetcher);

  if(isLoading) return <Spinner full={false}/>
  if(error) return <p>Error fetching games</p>
  let games = data.games
  return (
    <div>
      <Breadcrumb />
      <Categories categories={data.categories} />
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