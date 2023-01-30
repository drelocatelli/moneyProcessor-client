import axios from "axios";
import Error from "../Class/Error";
import type {DefaultData} from './Types';

class Resume {

    static async get(data: object, token: string) : Promise<DefaultData> {
        try {
            const response = await axios.get(import.meta.env.VITE_API_HOST.concat('/resume'), {
                params: data,
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            return { success: true, data: response.data};
        } catch(err: any) {
            const errors = Error.get(err);
            return {success: false, ...errors};
        }
    }
    
}

export default Resume;