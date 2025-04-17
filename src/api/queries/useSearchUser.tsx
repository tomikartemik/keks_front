import {useQuery} from "@tanstack/react-query";
import {apiMethods} from "../api.ts";

export const useSearchUser = (username: string) => {
    return useQuery({
        queryKey: [apiMethods.searchUser.key, username],
        queryFn: () => apiMethods.searchUser.method(username),
        enabled: !!username,
    })
}