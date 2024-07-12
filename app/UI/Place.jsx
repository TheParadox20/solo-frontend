'use client'
import { useState, useEffect } from "react"
import Link from "next/link";
import Input from "@/app/UI/Input"

export default function Place(){
    let [amount, setAmount] = useState(20);
    useEffect(()=>{
        window.addEventListener('place', e=>handler(e))
        return ()=>window.removeEventListener('place', e=>handler(e.detail))
    },[])

    let handler = e => {
        console.log(e.detail.message)
    }
    return(
        <div className="absolute bg-primary-dark p-2">
            <div className="flex justify-between">
                <div className="">
                    <p><span>{''}</span>{'Arsenal'}</p>
                    <p>Full Time Result</p>
                    <p>Manchester United vs Arsenal</p>
                </div>
                <div>
                    <button className=""><span className="w-4 h-4 icon-[lucide--ticket-plus]"/></button>
                    <button className=""><span className="w-4 h-4 icon-[material-symbols-light--close]"/></button>
                </div>
            </div>
            <div className="">
                <Input value={phone} setValue={setPhone} placeholder={'Enter Stake'} type={'number'} name={'Stake (KES)'}/>
                <p>Possible Win: <span>KES {137.00}</span></p>
                <div className="flex">
                    <p>Total Stakes: <span>KES {10345.60.toLocaleString()}</span></p>
                    <p>Users: <span> {173.0.toLocaleString()}</span></p>
                </div>
            </div>
            {
                true?
                <button className="w-full bg-primary-light font-semibold py-2">Place Bet</button>
                :
                <Link className="w-full bg-primary-light font-semibold py-2" href={'/login'}>Login to Stake</Link>
            }
        </div>
    )
}