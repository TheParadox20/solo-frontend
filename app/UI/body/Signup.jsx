'use client'
import { useState, useEffect } from "react"
import Input from "../Input"
import Logo from "./Logo"
import { save } from "@/app/lib/storage";
import { postData } from "@/app/lib/data"

export default function Signup({control}){
    let [name, setName] = useState('');
    let [phone, setPhone] = useState('');
    let [password, setPassword] = useState('');
    let [confirm, setConfirm] = useState('');

    let submit = (e)=>{
        e.preventDefault();
        postData((response)=>{
            save('token',response.token)
            control('')
        },{name,phone,password},'/signup')
    }

    return(
        <div className="bg-primary-base p-4 rounded-lg flex flex-col items-center justify-center gap-1">
            <Logo/>
            <h3 className="text-sm my-5 font-bold">Signup</h3>
            <div className="flex flex-col gap-6">
                <Input value={name} setValue={setName} placeholder={'Enter Name'} type={'text'} name={'Name'}/>
                <Input value={phone} setValue={setPhone} placeholder={'Enter Phone Number'} type={'tel'} name={'Phone Number'}/>
                <Input value={password} setValue={setPassword} placeholder={'Enter Password'} type={'password'} name={'Password'}/>
                <Input value={confirm} setValue={setConfirm} placeholder={'Confirm Password'} type={'password'} name={'Confirm Password'}/>
            </div>
            <button onClick={e=>submit(e)} className="bg-primary-light font-semibold w-full rounded-lg py-2 my-4">Continue</button>
            <div class="flex items-center justify-center w-1/3 mb-6">
                <div class="flex-grow min-w-full border-t-[1px] border-Grey"></div>
                <p className="px-2">OR</p>
                <div class="flex-grow min-w-full border-t-[1px] border-Grey"></div>
            </div>
            <button className="flex items-center justify-center gap-4 py-2 text-sm font-semibold border-2 border-primary-light rounded-lg w-full hover:shadow-md hover:shadow-primary-light"><span className="w-6 h-6 icon-[hugeicons--bitcoin-wallet]"/> Connect Crypto Wallet</button>
            <p className="text-xs mt-4 mb-8 font-semibold">Already have an account? <button className="text-primary-light" onClick={e=>control('/login')}>Sign in</button></p>
        </div>
    )
}