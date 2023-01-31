import Authentication from "../Class/Authentication";
import AuthService from "../Services/Auth";
import type { RequestEvent } from "./$types";

export const load = (async (event : RequestEvent) => {
    Authentication.protect(event);

    const token = event.cookies.get('mp_session');
    
    if(typeof token != 'undefined') {
        const user = await AuthService.details(event.cookies.get('mp_session')!);
        
        return {user, token};
    }
});
