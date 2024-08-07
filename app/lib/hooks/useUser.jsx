import { useState, useEffect, useContext } from "react";
import { Context } from "@/app/lib/ContextProvider";
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";
import { save, load, remove } from "@/app/lib/storage";
import { postData } from "@/app/lib/data"

export default function useUser () {
    let [stateChange, setStateChange] = useState(0);
    let {isLogged, setIsLogged} = useContext(Context);
    const { data, isError, isLoading, mutate } = useSWR(['/user',{}], fetcher)

    let logout = ()=>{
        remove('token');
        setIsLogged(false)
    }

    let login = (phone, password,worker)=>{
        postData((response)=>{
            save('token',response.token)
            if(response.token){
                mutate({
                    name: response.name,
                    phone: response.phone,
                    balance: response.balance
                })
                setIsLogged(true)
            }
            worker(response)
        },{phone,password},'/signin')
    }

    useEffect(()=>{
        if(!isLoading && !isError) if(data?.name) setIsLogged(true)
        console.log('User >> ',data)
    },[data])

    return {
        user: (isLoading || isError)?{}:data,
        isLoading,
        isError,
        login,
        logout,
        stateChange
    }
}