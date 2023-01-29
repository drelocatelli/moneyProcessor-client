import { redirect } from "@sveltejs/kit";
import type { RequestEvent } from "../routes/$types";
import type { IHandleAuthentication } from "./types/authentication.types";

class Authentication {

    public static protectedRoutes = ['/dashboard'];

    static saveSession(event: RequestEvent, token: string) {
        const CookieDate = new Date();
        CookieDate.setTime(CookieDate.getTime() + (365*24*60*60*1000));

        event.cookies.set('mp_session', token, {
            path: '/',
            expires: CookieDate
        });
    }

    private static hasCookie(event: RequestEvent) {
        return event.cookies?.get('mp_session') != undefined ? true : false;
    }

    static protect(event: RequestEvent) {
        const isProtectedRoute = this.protectedRoutes.some(e => event.url.pathname.startsWith(e));

        if(isProtectedRoute) {
            this.redirect(event, {default: '/'});
        } else {
            this.redirect(event, {hasCookie: '/dashboard'});
        }
    }

    private static redirect(event: RequestEvent, url?: IHandleAuthentication) {
        if(this.hasCookie(event)) {
            if(url?.hasCookie && !event.url.pathname.startsWith(url.hasCookie)) {
                throw redirect(301, url?.hasCookie);
            }
        } else {
            if (url?.default && event.url.pathname.startsWith(url?.default)) {
                throw redirect(301, url?.default);
            }
        } 
    }
}

export default Authentication;