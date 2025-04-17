import {useQuery} from "@tanstack/react-query";
import {apiMethods} from "../api.ts";

export const useGetUserAsSeller = (id: number) => {
    return useQuery({
        queryKey: [apiMethods.getUserAsSeller.key, id],
        queryFn: () => apiMethods.getUserAsSeller.method(id)
    })
}