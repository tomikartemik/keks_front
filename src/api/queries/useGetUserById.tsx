import {useQuery} from "@tanstack/react-query";
import {apiMethods} from "../api.ts";

export const useGetUserById = (id: number) => {
    return useQuery({
        queryKey: [apiMethods.getUserById.key],
        queryFn: () => apiMethods.getUserById.method(id)
    })
}