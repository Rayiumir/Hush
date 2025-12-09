import {treaty} from "@elysiajs/eden";

export const GET = () => {
    return new Response(JSON.stringify({ user: "Raymond" }), {
        status: 200,
    });
}
