import { useEffect, useContext } from "react";
import { Context } from "@/app/lib/ContextProvider";
import useSWR from "swr";
import { fetcher, postData } from "@/app/lib/data";
import { save, load, remove } from "@/app/lib/storage";

export default function useUser () {
    let {setIsLogged} = useContext(Context);
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

    let signUp = (name, phone, password, worker)=>{
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
        },{name,phone,password},'/signup')
    }

    let updateBalance = (amount)=>{
        mutate({
            ...data,
            balance: data.balance + amount
        })
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
        signUp,
        logout,
        updateBalance
    }
}