"use client"

import React, {ReactNode, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const Providers = ({ children }:{children: ReactNode}) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}