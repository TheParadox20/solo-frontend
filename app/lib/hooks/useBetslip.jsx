import { useEffect, useContext } from "react";
import { Context } from "@/app/lib/ContextProvider";
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";
import { save, load, remove } from "@/app/lib/storage";

export default function useBetslip () {
    let {setIsLogged} = useContext(Context);
    const { data, isError, isLoading, mutate } = useSWR(['/betslip',{}], fetcher)

    useEffect(()=>{
        if(!isLoading && !isError) if(data?.name) setIsLogged(true)
        console.log('User >> ',data)
    },[data])

    return {
        betslip: (isLoading || isError)?{}:data,
        isLoading,
        isError,
    }
}