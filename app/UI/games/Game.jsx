'use client'
import { placeE } from "@/app/lib/trigger";
import { nowYouSee } from "@/app/lib/controlls";

export default function Game({data}){
    let defaultStake = 20;
    let odd = (stakes, pot)=>{
        let award = ((defaultStake/stakes)==Infinity?1:(defaultStake/stakes))*pot+defaultStake;
        return (award/defaultStake).toFixed(2);
    }
    let place = (e,choice,outcome)=>{
        e.preventDefault();
        nowYouSee(['placeMobile','place']);
        placeE({
            choice,
            match: `${data.options[0]} vs ${data.options[1]}`,
            pot: data.stakes-choice.stake,
            outcome,
            id: data['id']
        })
    }
    return(
        <div className="border-b-[1px] border-Grey py-2 overflow-hidden">
            <div className="hidden  md:flex gap-4 mb-1 text-sm lg:text-xs 2xl:text-sm">
                <div className="">{data.time}</div>
                <div className="">{data.date}</div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="md:pr-4 flex-grow md:border-r-[1px] border-Grey">
                    <div className="flex justify-between">
                        <div className="font-semibold flex flex-col flex-grow gap-1">
                            <div className="">{data.options[0]}</div>
                            <div className="">{data.options[1]}</div>
                        </div>
                        <div className="md:hidden flex flex-col text-right gap-1 mb-1 text-sm lg:text-xs 2xl:text-sm">
                            <div className="">{data.time}</div>
                            <div className="">{data.date}</div>
                        </div>
                    </div>
                    <p className="mt-1">Total Stakes: <span className=" text-primary-light font-bold">KES {data.stakes.toLocaleString()}</span></p>
                </div>
                <div className="flex justify-between flex-grow gap-4">
                    {
                        data.outcomes.map((outcome,i)=>{
                            return(
                                <div key={i} className={`flex flex-col gap-2 justify-center items-center ${data.outcomes.length==2?'w-1/2':'w-1/3'}`}>
                                    <div className="truncate">{outcome.name}</div>
                                    <button className="bg-primary-light w-full rounded-md py-2 hover:scale-105 font-semibold" onClick={e=>place(e, outcome,i)}>{odd(outcome.stake,(data.stakes-outcome.stake))}</button>
                                    <div className="text-sm lg:text-xs 2xl:text-sm">{outcome.users.toLocaleString()}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}