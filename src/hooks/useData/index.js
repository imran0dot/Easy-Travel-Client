import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useData = (apiKey) => {
    const { data, refetch, isPending, isLoading } = useQuery({
        queryKey: [apiKey],
        queryFn: () => axios(apiKey).then(res => {
            return res.data
        })
    });

    return { data, refetch, isPending, isLoading }
}

export default useData;

