'use client'
import { useState, useEffect, useRef, useContext } from "react"
import { Context } from "@/app/lib/ContextProvider"
import Input from "@/app/UI/Input"
import { nowYouDont } from "@/app/lib/controlls";
import { overlayE } from "@/app/lib/trigger";
import { postData } from "@/app/lib/data";
import useUser from "@/app/lib/hooks/useUser";
import useBetslip from "@/app/lib/hooks/useBetslip";

export default function Place() {
    let defaultStake = 20;
    let [amount, setAmount] = useState(defaultStake);
    let [match, setMatch] = useState('');
    let [pot, setPot] = useState(0);
    let [users, setUsers] = useState(0);
    let [stakes, setStakes] = useState(0);
    let [market, setMarket] = useState('WIN');
    let [option, setOption] = useState('');

    let awardRef = useRef('');
    let outcomeRef = useRef(0);
    let idRef = useRef(0);
    let {isLogged} = useContext(Context);
    let {updateBalance} = useUser();

    useEffect(() => {
        const handler = (e) => {
            console.log(e.detail.game);
            outcomeRef.current = e.detail.game.outcome;
            idRef.current = e.detail.game.id;
            setMatch(e.detail.game.match);
            awardRef.current.innerText = `KES ${((amount / (e.detail.game.choice.stake + amount)) * e.detail.game.pot + amount).toFixed(2)}`;
            setPot(e.detail.game.pot);
            setUsers(e.detail.game.choice.users);
            setStakes(e.detail.game.choice.stake);
            setOption(e.detail.game.choice.name !== 'Draw' ? e.detail.game.choice.name : '');
            setMarket(e.detail.game.choice.name === 'Draw' ? 'DRAW' : 'WIN');
            setAmount(amount);
        };

        window.addEventListener('place', handler);
        return () => window.removeEventListener('place', handler);
    }, [amount]); // Add `amount` to dependencies

    useEffect(() => {
        if (isNaN(amount)) setAmount(0);
        const newAward = ((amount / (stakes + amount)) * pot + amount);
        if (isNaN(newAward)) awardRef.current.innerText = `KES ${0.00}`;
        else awardRef.current.innerText = `KES ${newAward.toFixed(2)}`;
    },[amount])

    let handler = e => {
        console.log(e.detail.game)
        outcomeRef.current = e.detail.game.outcome
        idRef.current = e.detail.game.id
        setMatch(e.detail.game.match)
        awardRef.current.innerText = `KES ${((amount/(e.detail.game.choice.stake+amount))*e.detail.game.pot+amount).toFixed(2)}`;
        setPot(e.detail.game.pot)
        setUsers(e.detail.game.choice.users)
        setStakes(e.detail.game.choice.stake)
        if(e.detail.game.choice.name != 'Draw') setOption(e.detail.game.choice.name)
        else setOption('')
        if(e.detail.game.choice.name == 'Draw') setMarket('DRAW')
        else setMarket('WIN')
        setAmount(amount)
    }

    let place = e=>{
        console.log(`Placing bet on ${idRef.current} amount ${amount} choice ${outcomeRef.current}`)
        postData((response)=>{
            if(response.message) updateBalance(-amount)
        },{
            game: idRef.current,
            amount,
            choice: outcomeRef.current
        }, '/bet/place');
    };

    return (
        <div className="p-4">
            <div className="flex justify-between mb-4">
                <div>
                    <p className="font-semibold 2xl:text-lg text-base mb-2"><span className="text-primary-light mr-2">{market}</span>{option}</p>
                    <p className="mb-2">Full Time Result</p>
                    <p className="text-nowrap font-light">{match}</p>
                </div>
                <div className="flex h-fit">
                    <button className="bg-primary-dark/75 flex items-center p-1 2xl:p-2 rounded-xl text-Error" onClick={() => nowYouDont(['place', 'placeMobile'])}>
                        <span className="w-6 h-6 2xl:w-7 2xl:h-7 icon-[material-symbols-light--close]" />
                    </button>
                </div>
            </div>
            <div className="mb-4">
                <Input value={amount} setValue={setAmount} placeholder={'Enter Stake'} type={'number'} name={'Stake (KES)'} />
                <p className="my-3">Possible Win: <span ref={awardRef} className="font-bold text-Success"></span></p>
                <div className="flex justify-between">
                    <p className="flex-grow border-r-[1px] border-Grey">Total Stakes: <span className="font-bold">KES {stakes.toLocaleString()}</span></p>
                    <p className="flex-grow text-right">Users: <span className="font-bold"> {users.toLocaleString()}</span></p>
                </div>
            </div>
            {isLogged ?
                <button onClick={place} className="w-full bg-primary-light font-semibold py-2 rounded-md">Place Bet</button>
                :
                <button onClick={() => overlayE('/login')} className="w-full bg-primary-light font-semibold py-2 rounded-md">Login to Stake</button>
            }
        </div>
    )
}
