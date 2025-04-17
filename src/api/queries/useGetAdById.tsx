import {useQuery} from "@tanstack/react-query";
import {apiMethods} from "../api.ts";

export const useGetAdById = (id: number) => {
    return useQuery({
        queryKey: [apiMethods.getAdById.key, id],
        queryFn: () => apiMethods.getAdById.method(id)
    })
}