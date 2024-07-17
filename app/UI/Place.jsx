'use client'
import { useState, useEffect } from "react"
import Link from "next/link";
import Input from "@/app/UI/Input"
import { nowYouSee, nowYouDont } from "@/app/lib/controlls";

export default function Place(){
    let [amount, setAmount] = useState(20);
    let [game, setGame] = useState(null);

    useEffect(()=>{
        window.addEventListener('place', e=>handler(e))
    },[])

    let handler = e => {
        nowYouSee('place')
        console.log(`Place: `,e.detail.game);
        setGame(e.detail.game)
    }
    return(
        <div className="p-4">
            <div className="flex justify-between mb-4">
                <div className="">
                    <p className="font-semibold 2xl:text-lg text-base mb-2"><span className="text-primary-light mr-2">{'WIN'}</span>{'Arsenal'}</p>
                    <p className="mb-2">Full Time Result</p>
                    <p className="text-nowrap font-light">Manchester United vs Arsenal</p>
                </div>
                <div className="flex h-fit">
                    <button className="mr-4 flex items-center p-1 2xl:p-2 rounded-xl"><span className="w-6 h-6 2xl:w-7 2xl:h-7 icon-[lucide--ticket-plus]"/></button>
                    <button className="bg-primary-dark/75 flex items-center p-1 2xl:p-2 rounded-xl text-Error" onClick={e=>nowYouDont('place')}><span className="w-6 h-6 2xl:w-7 2xl:h-7 icon-[material-symbols-light--close]"/></button>
                </div>
            </div>
            <div className="mb-4">
                <Input value={amount} setValue={setAmount} placeholder={'Enter Stake'} type={'number'} name={'Stake (KES)'}/>
                <p className="my-3">Possible Win: <span className="font-bold text-Success">KES {137.00}</span></p>
                <div className="flex justify-between">
                    <p className="flex-grow border-r-[1px] border-Grey">Total Stakes: <span className="font-bold">KES {10345.60.toLocaleString()}</span></p>
                    <p className="flex-grow text-right">Users: <span className="font-bold"> {173.0.toLocaleString()}</span></p>
                </div>
            </div>
            {
                true?
                <button className="w-full bg-primary-light font-semibold py-2 rounded-md">Place Bet</button>
                :
                <Link className="w-full bg-primary-light font-semibold py-2 rounded-md" href={'/login'}>Login to Stake</Link>
            }
        </div>
    )
}