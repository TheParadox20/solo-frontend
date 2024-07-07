'use client'
import { useState, useEffect } from "react"

export default function Popup(){
    let [hidden, setHidden] = useState(true)
    let [state, setState] = useState('bg-primary/50 shadow-primary/50')//ok, warning, error
    let [type, setType] = useState('New notification')
    let [message, setMessage] = useState('The quick brown fox jumped over the lazy dogs')

    useEffect(()=>{
        window.addEventListener('popup', e=>handler(e))
        return ()=>window.removeEventListener('popup', e=>handler(e.detail))
    },[])

    useEffect(()=>{
        let timer = setTimeout(()=>setHidden(true), 5000)
        return ()=>clearTimeout(timer)
    },[hidden])

    let handler = e => {
        setHidden(false)
        if (e.detail.state == 'ok') setState('bg-primary/50 shadow-primary/50')
        if (e.detail.state == 'warning') setState('bg-warning/50 shadow-warning/50')
        if (e.detail.state == 'error') setState('bg-warning/50 shadow-warning/50')
        setType(e.detail.type)
        setMessage(e.detail.message)
    }
    return(
        <div className={`fixed top-4 right-0 p-4 w-52 md:w-96 rounded-md z-50 shadow-xl transition-transform duration-500 ease-in-out transform ${state} ${hidden ? 'translate-x-full shadow-none' : 'translate-x-0 mr-4'}`}>
            <div className="flex mb-4 justify-between font-semibold">
                <button className="w-6 h-6" onClick={e=>setHidden(true)}/>
                <span>{type}</span>
            </div>
            <p className="text-sm">{message}</p>
        </div>
    )
}