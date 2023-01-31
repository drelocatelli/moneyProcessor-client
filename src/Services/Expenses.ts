import axios from "axios";
import Error from "../Class/Error";
import type { DefaultData } from "./Types";

class Expenses {

    static async index(token: string, params?: object): Promise<DefaultData> {
        try {
            const response = await axios.get(import.meta.env.VITE_API_HOST.concat('/expenses'), {
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
            const response = await axios.post(import.meta.env.VITE_API_HOST.concat('/expenses/create'), data, {
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
            const response = await axios.put(import.meta.env.VITE_API_HOST.concat('/expenses/update'), data, {
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
            const response = await axios.delete(import.meta.env.VITE_API_HOST.concat('/expenses/delete'), {
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

export default Expenses;