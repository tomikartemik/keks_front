import {useMutation, useQueryClient} from "@tanstack/react-query";
import {apiMethods} from "../api.ts";
import {IPurchaseRequest} from "../api.types.ts";

export const usePurchaseMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: IPurchaseRequest) => apiMethods.purchaseAd.method(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [apiMethods.getUserById.key]
            })
        }
    })
}