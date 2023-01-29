import { env } from "$env/dynamic/private";
import axios from "axios";
import Error from "../Class/Error";
import type { DefaultData } from "./Types";

class Auth {

    static async login(data: object) : Promise<DefaultData> {
        try {
            const response = await axios.post(env.VITE_API_HOST.concat('/auth/login'), data);
        
            return {success: true, data: response.data};
        } catch(err: any) {
            const errors = Error.get(err);
            return {success: false, ...errors};
        }
    }

    static async register(data: object) : Promise<DefaultData> {
        try {
            const response = await axios.post(env.VITE_API_HOST.concat('/auth/register'), data);

            return {success: true, data: response.data};            
        } catch(err: any) {
            const errors = Error.get(err);
            return {success: false, ...errors};
        }
    }

    static async details(token: string) : Promise<DefaultData> {
        try {
            const response = await axios.get(env.VITE_API_HOST.concat('/auth/details'), {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            return {success: true, data: response.data};
        } catch(err: any) {
            const errors = Error.get(err);
            return {success: false, ...errors};
        }
    }
    
}

export default Auth;