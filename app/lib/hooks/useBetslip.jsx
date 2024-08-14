import { useEffect, useContext } from "react";
import { Context } from "@/app/lib/ContextProvider";
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";

export default function useBetslip () {
    let {isLogged} = useContext(Context);
    const { data, isError, isLoading, mutate } = useSWR(['/betslip',{}], fetcher)
    useEffect(()=>{
        if(isLogged) mutate()
        else mutate([])
    },[isLogged])

    return {
        betslip: (isLoading || isError || !isLogged)?[]:data,
        isLoading,
        isError,
        mutate
    }
}