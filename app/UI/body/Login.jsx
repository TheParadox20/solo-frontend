'use client'
import { useState, useEffect } from "react"
import Input from "../Input"
import Logo from "./Logo"
import {load} from "@/app/lib/storage"
import useUser from "@/app/lib/hooks/useUser"
import ConnectWallet from "@/app/UI/body/ConnectWallet";

export default function Login({control}){
    let [phone, setPhone] = useState('');
    let [password, setPassword] = useState('');

    let { login } = useUser();

    let submit = (e)=>{
        e.preventDefault();
        login(phone,password,(_)=>{
            if(load('token')!=null) control('')
        })
    }

    return(
        <div className="bg-primary-base p-4 rounded-lg flex flex-col items-center justify-center gap-1">
            <Logo/>
            <h3 className="text-sm my-5 font-bold">Login</h3>
            <div className="flex flex-col gap-6">
                <Input value={phone} setValue={setPhone} placeholder={'Enter Phone Number'} type={'tel'} name={'Phone Number'}/>
                <Input value={password} setValue={setPassword} placeholder={'Enter Password'} type={'password'} name={'Password'}/>
            </div>
            <button onClick={e=>submit(e)} className="bg-primary-light font-semibold w-full rounded-lg py-2 my-4">Continue</button>
            <div class="flex items-center justify-center w-1/3 mb-6">
                <div class="flex-grow min-w-full border-t-[1px] border-Grey"></div>
                <p className="px-2">OR</p>
                <div class="flex-grow min-w-full border-t-[1px] border-Grey"></div>
            </div>
            <ConnectWallet className="flex items-center justify-center gap-4 py-2 text-sm font-semibold border-2 border-primary-light rounded-lg w-full hover:shadow-md hover:shadow-primary-light">
                <span className="w-6 h-6 icon-[hugeicons--bitcoin-wallet]"/> Connect Crypto Wallet
            </ConnectWallet>
            <p className="text-xs mt-4 mb-8 font-semibold">Don{"\'"}t have an account? <button className="text-primary-light" onClick={e=>control('/signup')}>Sign up</button></p>
        </div>
    )
}