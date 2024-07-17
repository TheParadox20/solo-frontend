'use client'
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  let [showSettled, setShowSettled] = useState(false);

  return (
    <div className="border-t-[1px] border-Grey py-8 px-2">
      <div className="md:mx-auto md:w-1/2 2xl:w-1/3">
          <h1 className="font-bold text-3xl mb-5">My Bets</h1>
          <p className="text-sm mb-8">View your currently active and previously settled bets</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <button className={`font-semibold text-lg ${!showSettled?'text-primary-light underline underline-offset-2':''}`} onClick={e=>setShowSettled(false)}>Active</button>
              <button className={`font-semibold text-lg ${showSettled?'text-primary-light underline underline-offset-2':''}`} onClick={e=>setShowSettled(true)}>Settled</button>
            </div>
            <button className="icon-[material-symbols-light--refresh] w-7 h-7"/>
          </div>
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
      </div>
    </div>
  );
}