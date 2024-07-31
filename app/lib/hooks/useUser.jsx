import { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";
import { save, load, remove } from "@/app/lib/storage";
import { postData } from "@/app/lib/data"

export default function useUser () {
    let [stateChange, setStateChange] = useState(0);
    let isLogged = false;
    const { data, isError, isLoading } = useSWR(['/user',{}], fetcher)

    useEffect(()=>{
        setStateChange(stateChange+=1)
    },[isLogged])

    let logout = ()=>{
        remove('token');
        isLogged = false;
    }

    let login = (phone, password,worker)=>{
        postData((response)=>{
            save('token',response.token)
            if(response.token) isLogged = true
            worker(response)
        },{phone,password},'/signin')
    }

    if(!isLoading && !isError) if(data?.name) isLogged = true

    return {
        user: (isLoading || isError)?{}:data,
        isLoading,
        isError,
        isLogged,
        login,
        logout,
        stateChange
    }
}