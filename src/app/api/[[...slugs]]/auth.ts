import {Elysia} from "elysia";
import {redis} from "@/lib/redis";

class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthenticationError";
  }
}

export const authMiddleware = new Elysia({
    name: "auth"})
    .error({AuthenticationError})
    .onError(({ code, set }) => {
        if (code === "AuthenticationError") {
            set.status = 401;
            return {error: "Unauthorized"}
        }
    })
    .derive({as: "scoped"}, async ({query, cookie}) =>{
        const roomId = query.roomId;
        const token = cookie["x-auth-token"].value as string | undefined;

        if(!token || !roomId){
            throw new AuthenticationError("Missing token or roomId")
        }

        const connected = await redis.hget<string[]>(`meta:${roomId}`, "connected");

        if(!connected?.includes(token)){
            throw new AuthenticationError("Invalid token")
        }

        return {auth: {token, roomId, connected}}
    })
