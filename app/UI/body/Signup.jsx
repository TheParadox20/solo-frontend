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
        <div className="bg-primary-base p-3 rounded-lg flex flex-col items-center justify-center gap-1">
            <Logo/>
            <div className="flex">
                <h3 className="text-xl font-bold">Signup</h3>
                <button onClick={e=>control('')} className="w-8 h-8"><span className="icon-[material-symbols-light--close] w-8 h-8"/></button>
            </div>
            <Input value={name} setValue={setName} placeholder={'Enter Name'} type={'text'} name={'Name'}/>
            <Input value={phone} setValue={setPhone} placeholder={'Enter Phone Number'} type={'tel'} name={'Phone Number'}/>
            <Input value={password} setValue={setPassword} placeholder={'Enter Password'} type={'password'} name={'Password'}/>
            <Input value={confirm} setValue={setConfirm} placeholder={'Confirm Password'} type={'password'} name={'Confirm Password'}/>
            <button className="text-right text-xs 2xl:text-sm text-primary-light font-semibold">Forgot password?</button>
            <button onClick={e=>submit(e)} className="bg-primary-light font-semibold w-full rounded-lg py-2 my-4">Continue</button>
        </div>
    )
}