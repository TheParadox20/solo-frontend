'use client'
import Link from "next/link";
import { useState, useContext } from "react";
import { Context } from "@/app/lib/ContextProvider";
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";
import Search from "@/app/UI/body/Search";
import Spinner from "@/app/UI/body/Spinner";

export default function Page() {
  let {isLogged} = useContext(Context);
  let [showSettled, setShowSettled] = useState(false);
  let [search, setSearch] = useState('');
  const { data, isError, isLoading } = useSWR(['/bets',{}], fetcher)

  if(isError) return <p>Error loading bets</p>

  return (
    <div className="border-t-[1px] border-Grey py-8 px-2">
      <div className="md:mx-auto md:w-1/2 2xl:w-1/3">
          <h1 className="font-bold text-3xl mb-5">My Bets</h1>
          <p className="text-sm mb-8">View your currently active and previously settled bets</p>
          <div className="flex justify-between items-center gap-3">
            <div className="flex gap-4">
              <button className={`font-semibold text-lg ${!showSettled?'text-primary-light underline underline-offset-2':''}`} onClick={e=>setShowSettled(false)}>Active</button>
              <button className={`font-semibold text-lg ${showSettled?'text-primary-light underline underline-offset-2':''}`} onClick={e=>setShowSettled(true)}>Settled</button>
            </div>
            <div className="h-8">
              <Search search={search} setSearch={setSearch}/>
            </div>
          </div>
          {
            (data?.length==0 || !isLogged) ?
           <>
           {
             showSettled?
             <div className="flex flex-col pt-40">
               <div className="icon-[pepicons-pencil--ticket-circle-off] w-16 h-16 mx-auto"/>
               <p className="text-sm text-center my-2">No Settled Bets</p>
               <p className="text-sm text-center my-2">Bets placed that have settled in the past 24 hours appear here. If you don{"\'"}t see your expected bets, head to statement.</p>
             </div>
             :
             <div className="flex flex-col pt-40">
               <div className="icon-[pepicons-pencil--ticket-circle-off] w-16 h-16 mx-auto"/>
               <p className="text-sm text-center my-2">No Active Bets</p>
               <p className="text-sm text-center my-2">Bets placed appear here. If you don{"\'"}t see your expected bets, head to statement.</p>
             </div>
           }
           <Link className="bg-primary-light w-full block py-3 text-center font-semibold rounded-md mt-8" href={'/account/statement'}>Go To Statement</Link>
           </>
           :
           isLoading && <Spinner full={false}/>
          }
          {
            data?.length>0 && !isLoading && !isError &&
            <div className="overflow-x-scroll mt-2 md:mt-10 mx-2 lg:mx-0 max-h-96 md:max-h-[65vh] overflow-y-scroll">
              <table className="w-full text-sm lg:text-xs 2xl:text-sm text-left table-auto">
                <thead className="capitalize sticky top-0 border-b-2 border-Grey">
                  <tr>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">Bet ID</th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">Market</th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">Event</th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">Choice</th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">Payout</th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">Stake</th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    // filter out settled bets
                    data.filter(bet=>showSettled?bet.settled:!bet.settled)
                    .map((bet, key)=>(
                      <tr key={key} className="border-b border-Grey">
                        <td className="px-6 py-4 whitespace-nowrap">{bet.betID}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{bet.market}</td>
                        <td className="px-6 py-4 whitespace-nowrap"><div>{bet.homeTeam}</div> <div className="text-center">vs</div> <div>{bet.awayTeam}</div></td>
                        <td className="px-6 py-4 whitespace-nowrap">{bet.choice}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{bet.payout.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{bet.stake}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{bet.date}</td>
                      </tr>
                    ))
                  }
                  {
                    [...Array(data.filter(bet=>showSettled?bet.settled:!bet.settled).length>5?0:5-data.filter(bet=>showSettled?bet.settled:!bet.settled).length)].map((_,i)=>(<tr key={i} className="border-b border-Grey"><td className="px-6 py-4 whitespace-nowrap"> </td></tr>))
                  }
                </tbody>
              </table>
            </div>
          }
      </div>
    </div>
  );
}