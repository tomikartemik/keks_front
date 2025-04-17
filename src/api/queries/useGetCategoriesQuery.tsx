import {useQuery} from "@tanstack/react-query";
import {apiMethods} from "../api.ts";

export const useGetCategoriesQuery = () => {
    return useQuery({
        queryKey: [apiMethods.getCategories.key],
        queryFn: apiMethods.getCategories.method
    })
}