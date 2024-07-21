'use client'
import { useState, useEffect } from "react"
import Link from "next/link";
import Input from "@/app/UI/Input"
import { nowYouDont } from "@/app/lib/controlls";

export default function Place(){
    let defaultStake = 20;
    let [amount, setAmount] = useState(defaultStake);
    let [award, setAward] = useState(0);
    let [match, setMatch] = useState('');
    let [pot, setPot] = useState(0);
    let [users, setUsers] = useState(0);
    let [stakes, setStakes] = useState(0);
    let [market, setMarket] = useState('WIN');
    let [option, setOption] = useState('');

    useEffect(()=>{
        window.addEventListener('place', e=>handler(e))
        return ()=>window.removeEventListener('place', e=>handler(e))
    },[])

    useEffect(()=>{
        setAward(((amount/(stakes+amount))*pot+amount))
    },[amount])

    let handler = e => {
        console.log(`Place: `,e.detail);
        setMatch(e.detail.game.match)
        setAward((amount/(e.detail.game.choice.stake+amount))*e.detail.game.pot+amount)
        setPot(e.detail.game.pot)
        setUsers(e.detail.game.choice.users)
        setStakes(e.detail.game.choice.stake)
        if(e.detail.game.choice.name != 'Draw') setOption(e.detail.game.choice.name)
        else setOption('')
        if(e.detail.game.choice.name == 'Draw') setMarket('DRAW')
        else setMarket('WIN')
    }
    return(
        <div className="p-4">
            <div className="flex justify-between mb-4">
                <div className="">
                    <p className="font-semibold 2xl:text-lg text-base mb-2"><span className="text-primary-light mr-2">{market}</span>{option}</p>
                    <p className="mb-2">Full Time Result</p>
                    <p className="text-nowrap font-light">{match}</p>
                </div>
                <div className="flex h-fit">
                    <button className="mr-4 flex items-center p-1 2xl:p-2 rounded-xl"><span className="w-6 h-6 2xl:w-7 2xl:h-7 icon-[lucide--ticket-plus]"/></button>
                    <button className="bg-primary-dark/75 flex items-center p-1 2xl:p-2 rounded-xl text-Error" onClick={e=>nowYouDont(['place','placeMobile'])}><span className="w-6 h-6 2xl:w-7 2xl:h-7 icon-[material-symbols-light--close]"/></button>
                </div>
            </div>
            <div className="mb-4">
                <Input value={amount} setValue={setAmount} placeholder={'Enter Stake'} type={'number'} name={'Stake (KES)'}/>
                <p className="my-3">Possible Win: <span className="font-bold text-Success">KES {award}</span></p>
                <div className="flex justify-between">
                    <p className="flex-grow border-r-[1px] border-Grey">Total Stakes: <span className="font-bold">KES {stakes.toLocaleString()}</span></p>
                    <p className="flex-grow text-right">Users: <span className="font-bold"> {users.toLocaleString()}</span></p>
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