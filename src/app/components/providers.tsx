"use client"

import React, {ReactNode, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RealtimeProvider} from "@upstash/realtime/client";

export const Providers = ({ children }:{children: ReactNode}) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <RealtimeProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </RealtimeProvider>
    )
}