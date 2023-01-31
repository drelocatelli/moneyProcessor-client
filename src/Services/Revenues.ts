import { env } from "$env/dynamic/private";
import axios from "axios";
import Error from "../Class/Error";
import type { DefaultData } from "./Types";

class Revenues {

    static async index(token: string, params?: object): Promise<DefaultData> {
        try {
            const response = await axios.get(env.VITE_API_HOST.concat('/revenues'), {
                params,
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

    static async create(token: string, data: object): Promise<DefaultData> {
        try {
            const response = await axios.post(env.VITE_API_HOST.concat('/revenues/create'), data, {
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

    static async update(token: string, id: string, data: object): Promise<DefaultData> {
        try {
            const response = await axios.put(env.VITE_API_HOST.concat('/revenues/update'), data, {
                params: {
                    id
                },
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

    static async delete(token: string, id: string): Promise<DefaultData> {
        try {
            const response = await axios.delete(env.VITE_API_HOST.concat('/revenues/delete'), {
                params: {
                    id
                },
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

export default Revenues;