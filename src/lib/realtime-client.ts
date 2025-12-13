"use client"

import {createRealtime} from "@upstash/realtime/client";
import {RealtimeEvents} from "@/lib/realtime";

export const {useRealtime} = createRealtime<RealtimeEvents>()