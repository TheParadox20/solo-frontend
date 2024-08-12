'use client'
import { useState } from "react";
import { createContext } from "react";
import useSWR from "swr";
import { fetcher } from "./data";
import Spinner from "@/app/UI/body/Spinner";

export let Context = createContext();

export default function ContextProvider({ children }) {
    let [isLogged, setIsLogged] = useState(false);
     let { data, error, isLoading } = useSWR(['/menu',{}], fetcher);
    if(isLoading) return <Spinner full={true}/>
    let Popular;
    let Sports;
    if(error){
        Popular = []
        Sports = []
    }else{
        Popular = data.Popular
        Sports = data.Sports
    }
    return(
        <Context.Provider value={{Popular, Sports, isLogged, setIsLogged}}>
        {children}
        </Context.Provider>
    )
}