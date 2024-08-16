'use client'
import { useContext, useRef, useEffect, useState } from "react";
import { Context } from "@/app/lib/ContextProvider";
import useBetslip from "@/app/lib/hooks/useBetslip";
import { overlayE } from "@/app/lib/trigger";
import EditBet from "./Edit";
import DeleteBet from "./Delete";
import Overlay from "../body/Overlay";

export function Time({start}){//start==hr:min:sec
    let time = start.split(':');
    let minRef = useRef(null);
    let secRef = useRef(null);
    let hrRef = useRef(null);
    time = time.map(t=>parseInt(t));
    let [hr,min,sec] = time;
    useEffect(()=>{
        setInterval(()=>{
            hrRef.current.innerText = hr!=0?`${hr}:`:'';
            minRef.current.innerText = min;
            secRef.current.innerText = sec+=1;
            if(sec>=60){
                sec=0;
                min+=1;
            }
            if(min>=60){
                min=0;
                hr+=1;
            }
        },1000)
    },[])
    if(time.length!=3) return <div>{start}</div>
    return <div>
        <span ref={hrRef}/>
        <span ref={minRef}/>:
        <span ref={secRef}/>
    </div>
}

export function Bet({bet, control, ID}){
    let textColour;
    switch(bet.status.name){
        case 'Pending':
            textColour = 'text-Warning';
            break;
        case 'Live':
            textColour = 'text-Success';
            break;
        default:
            textColour = 'text-Error';
    }
    return(
        <div className="w-full relative p-2 border-b-[1px] border-Grey">
            <button className="icon-[heroicons--ellipsis-vertical-solid] absolute right-0 w-6 h-6"/>
            <div className="flex gap-1 font-bold">
                <div>{bet.homeTeam}</div>
                vs
                <div>{bet.awayTeam}</div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex">
                {
                    bet.choice=='Draw'?
                    <div className="uppercase text-primary-light">{bet.choice}</div>
                    :
                    <>
                        <div className="text-primary-light mr-2">WIN</div>
                        <div className="">{bet.choice}</div>
                    </>
                }
                </div>
            </div>
            <div className={`flex justify-between gap-1 mt-2 ${textColour}`}>
                {bet.status.name=='Pending' && <span>Starts {bet.start}</span>}
                {
                bet.status.name=='Live' && 
                    <>
                        <div className="flex items-center"><span className="icon-[fluent--live-20-filled] animate-pulse w-6 h-6 mr-1"/>Live ({bet.status.homeScore}-{bet.status.awayScore})</div>
                        <Time start={bet.status.time}/>
                    </>
                }
            </div>
            {
                ID==bet.id &&
                <div className={`bg-primary-dark absolute right-5 shadow-md w-1/3 p-2 rounded-lg shadow-Grey bottom-0`}>
                    <button onClick={e=>control('edit')} className="block text-left p-1 w-full bg-primary-light rounded-md ">Edit</button>
                    <button onClick={e=>control('delete')} className="block text-left p-1 w-full text-Error">Delete</button>
                </div>
            }
        </div>
    )
}

export default function Betslip(){
    let {isLogged} = useContext(Context);
    let {betslip, isLoading, isError} = useBetslip();
    let [overlay, setOverlay] = useState('');
    let [id, setId] = useState(null);

    return(
        <div className="bg-primary-base relative h-[50vh] rounded-xl">
            <h6 className="text-xl font-bold p-4">Betslip</h6>
            <div className="flex flex-col items-center mx-4 gap-3">
                {
                    !isLogged || isLoading || isError || betslip?.length==0?
                    <>
                    <div className="icon-[pepicons-pencil--ticket-circle-off] w-16 h-16"/>
                    <p className="text-center font-semibold text-lg">Your betslip is empty</p>
                    <p className="text-sm">Make a selection to add a bet to your betslip</p>
                    </>
                    :
                    <div className="bg-primary-dark w-full rounded-lg max-h-[40vh] overflow-y-scroll pb-12 large-scroll">
                        {betslip.map((bet,i)=>(<div key={i} onClick={e=>setId(bet.id)}><Bet bet={bet} control={setOverlay} ID={id}/></div>))}
                    </div>
                }
            </div>
            {
                isLogged?
                <div className="absolute block text-center bottom-0 w-full rounded-b-xl bg-primary-light py-4 font-semibold">
                    {
                        betslip.length==0?
                        <span className="w-full">Place Bet</span>
                        :
                        <span>Possible Payout: <span className=" text-Success">KES {(betslip.reduce((acc,cur)=>acc+cur.payout,0)).toFixed(2).toLocaleString()}</span></span>
                    }
                </div>
                :
                <button onClick={e=>overlayE('/login')} className="absolute block text-center bottom-0 w-full rounded-b-xl bg-primary-light py-4 font-semibold">Signup or Login To Bet</button>
            }
            <Overlay control={setOverlay} id={'bet-actions'} className={`${overlay==''?'hidden':'block'}`}>
                {overlay=='edit' && <EditBet id={id} control={setOverlay}/>}
                {overlay=='delete' && <DeleteBet id={id} control={setOverlay}/>}
            </Overlay>
        </div>
    )
}