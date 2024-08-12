'use client'
import { useState, useEffect } from "react"

export default function Popup(){
    let [hidden, setHidden] = useState(true)
    let [state, setState] = useState('Success')
    let [message, setMessage] = useState('')

    useEffect(()=>{
        window.addEventListener('popup', e=>handler(e))
        return ()=>window.removeEventListener('popup', e=>handler(e.detail))
    },[])

    useEffect(()=>{
        let timer = setTimeout(()=>setHidden(true), 5000)
        return ()=>clearTimeout(timer)
    },[hidden])

    let states = {
        Success: {
            icon: 'icon-[teenyicons--tick-circle-outline]',
            text: 'text-Success'
        },
        Warning: {
            icon: 'icon-[bi--exclamation-circle]',
            text: 'text-Warning'
        },
        Error: {
            icon: 'icon-[ph--x-circle]',
            text: 'text-Error'
        },
        Processing: {
            icon: 'icon-[line-md--loading-twotone-loop]',
            text: 'text-primary-light'
        }
    }

    let handler = e => {
        setHidden(false)
        setState(e.detail.state)
        setMessage(e.detail.message)
    }
    return(
        <div className={`fixed bg-primary-dark top-8 right-0 px-4 pt-4 w-96 rounded-md z-50 shadow-lg transition-transform duration-500 ease-in-out transform shadow-primary-light ${hidden ? 'translate-x-full shadow-none' : 'translate-x-0 mr-4'}`} onClick={e=>setHidden(true)}>
            <div className="flex justify-between mb-4 gap-4 items-center font-semibold">
                <div className="flex items-center gap-4">
                    <button className={`w-6 ${states[state].text} h-6 ${states[state].icon}`}/>
                    <span className={`${states[state].text}`}>{state}:</span>
                    <p className="text-sm">{message}</p>
                </div>
                <button className="w-6 h-6 icon-[material-symbols-light--close]"/>
            </div>
        </div>
    )
}