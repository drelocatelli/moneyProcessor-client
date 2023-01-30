import { redirect } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";

export const load = (async (event : RequestEvent) => {
    const token = event.cookies.get('mp_session');
    
    if(typeof token != 'undefined') {
        event.cookies.delete('mp_session', {path: '/'});
        throw redirect(301, '/');
    }
});