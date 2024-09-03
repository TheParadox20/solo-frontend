'use client';
import { useEffect, useContext } from "react";
import { Context } from "@/app/lib/ContextProvider";
import useSWR from "swr";
import { fetcher } from "@/app/lib/data";

export default function useBetslip() {
    const { isLogged, setIsLogged } = useContext(Context);
    const { data, isError, isLoading, mutate } = useSWR(['/betslip', {}], fetcher);

    useEffect(() => {
        if (!isLoading && !isError && data?.name) {
            setIsLogged(true);
        }
        console.log('User >> ', data);
    }, [data, isError, isLoading, setIsLogged]);

    useEffect(() => {
        if (isLogged) {
            mutate();
        } else {
            mutate([]);
        }
    }, [isLogged, mutate]);

    return {
        betslip: isLoading || isError ? {} : data,
        isLoading,
        isError,
        mutate
    };
}
