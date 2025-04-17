import {useQuery} from "@tanstack/react-query";
import {apiMethods} from "../api.ts";

export const useGetAdList = (categoryId: number) => {
    return useQuery({
        queryKey: [apiMethods.getAdList.key, categoryId],
        queryFn: () => apiMethods.getAdList.method(categoryId)
    })
}