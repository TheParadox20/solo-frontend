import useSWR from "swr";
import { fetcher } from "@/app/lib/data";

export default function useUser () {
    const { data, error, isLoading } = useSWR(['/user',{}], fetcher)

    return {
        user: data?data.user:data,
        isLoading,
        isError: error
    }
}