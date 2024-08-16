'use client'
import { useState, useEffect, useCallback } from "react"
import Overlay from "./Overlay"
import Login from "./Login"
import Signup from "./Signup"

export default function Overlays(){
    let [page, setPage] = useState('')

    const handler = useCallback((e) => {
        setPage(e.detail.page)
    }, []);

    useEffect(() => {
        window.addEventListener('overlay', handler);
        return () => window.removeEventListener('overlay', handler);
    }, [handler]);

    return(
        <Overlay control={setPage} id={'alpha-overlay'} className={`${page === '' ? 'hidden' : 'block'}`}>
            {page === '/login' && <Login control={setPage}/>}
            {page === '/signup' && <Signup control={setPage}/>}
        </Overlay>
    )
}
