'use client'
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";
import Spinner from "@/app/UI/body/Spinner";
import Hero from "@/app/UI/body/Hero";
import Game from "@/app/UI/games/Game";
import SportIcon from "@/app/UI/SportsIcon";

export default function Page() {
  let { data:popular, error, isLoading } = useSWR(['/home',{}], fetcher);

  if(isLoading) return <Spinner full={false}/>
  if(error) return <p>Error fetching games</p>
  return (
    <div className="lg:mt-7">
        <Hero/>
        {
          Object.keys(popular).map((sport,i)=>{
            return (
              <div key={i}>
                <div className="flex items-center font-bold text-lg gap-2 2xl:text-2xl mb-4"><SportIcon sport={sport} classname={'w-7 h-7'}/>Upcoming {sport}</div>
                <div className="bg-primary-base mb-8 px-5 md:px-8 pb-10 pt-2 rounded-lg">
                  {
                    popular[sport].data.map((match,i)=>(<div key={i} className="my-4"><Game data={match}/></div>))
                  }
                  <Link href={`/sports?sport=${sport}`} className="w-full flex items-center justify-center text-center font-semibold underline underline-offset-4">View All Upcoming {sport} <span className="icon-[basil--arrow-right-outline] w-7 h-7"/></Link>
                </div>
              </div>
            )
          })
        }
    </div>
  );
}