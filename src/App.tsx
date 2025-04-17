import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AuthWrapper} from "./components/authWrapper/authWrapper.tsx";
import {ModalsProvider} from "./components/modalContext/modal.context.tsx";
import {Modals} from "./components/modals/modals.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            staleTime: 600000
        }
    }
})

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <AuthWrapper>
                <ModalsProvider>
                    <RouterProvider router={router} />
                    <Modals />
                </ModalsProvider>
            </AuthWrapper>
        </QueryClientProvider>
    )
}

export default App
