import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";
import { save, load, remove } from "@/app/lib/storage";
import { postData } from "@/app/lib/data"

export default function useUser () {
    let isLogged = false;
    const { data, isError, isLoading } = useSWR(['/user',{}], fetcher)

    let logout = ()=>{
        remove('token');
    }

    let login = (phone, password)=>{
        postData((response)=>{
            save('token',response.token)
            if(response.token) isLogged = true
        },{phone,password},'/signin')
    }

    if(!isLoading && !isError) if(data?.name) isLogged = true

    return {
        user: (isLoading || isError)?{}:data,
        isLoading,
        isError,
        isLogged,
        login,
        logout
    }
}