'use client';
import { useEffect, useContext } from "react";
import { Context } from "@/app/lib/ContextProvider";
import useSWR from "swr";
import { fetcher, postData } from "@/app/lib/data";
import { save, remove } from "@/app/lib/storage";

export default function useUser() {
    const { setIsLogged } = useContext(Context);
    const { data, isError, isLoading, mutate } = useSWR(['/user', {}], fetcher);

    const logout = () => {
        remove('token');
        setIsLogged(false);
    };

    const login = (phone, password, worker) => {
        postData((response) => {
            save('token', response.token);
            if (response.token) {
                mutate({
                    name: response.name,
                    phone: response.phone,
                    balance: response.balance,
                });
                setIsLogged(true);
            }
            worker(response);
        }, { phone, password }, '/signin');
    };

    const signUp = (name, phone, password, worker) => {
        postData((response) => {
            save('token', response.token);
            if (response.token) {
                mutate({
                    name: response.name,
                    phone: response.phone,
                    balance: response.balance,
                });
                setIsLogged(true);
            }
            worker(response);
        }, { name, phone, password }, '/signup');
    };

    const updateBalance = (amount) => {
        mutate({
            ...data,
            balance: data.balance + amount,
        });
    };

    useEffect(() => {
        if (!isLoading && !isError && data?.name) {
            setIsLogged(true);
        }
        console.log('User >> ', data);
    }, [data, isError, isLoading, setIsLogged]);

    return {
        user: isLoading || isError ? {} : data,
        isLoading,
        isError,
        login,
        signUp,
        logout,
        updateBalance,
    };
}
