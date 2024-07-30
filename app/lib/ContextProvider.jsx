'use client'
import { createContext } from "react";
import useSWR from "swr";
import { fetcher } from "./data";
import Spinner from "@/app/UI/body/Spinner";

export let Context = createContext();

export default function ContextProvider({ children }) {
    let { data, error, isLoading } = useSWR(['/menu',{}], fetcher);
    if(isLoading) return <Spinner full={true}/>
    if(error) return <p>Error connecting to server</p>
    let Popular = data.Popular
    let Sports = data.Sports
    return(
        <Context.Provider value={{Popular, Sports}}>
        {children}
        </Context.Provider>
    )
}