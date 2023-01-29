import Authentication from "../../Class/Authentication";
import Error from "../../Class/Error";
import Auth from "../../Services/Auth";
import type { DefaultData } from "../../Services/Types";
import type { Actions } from "./$types";

interface Credentials {
    name: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
    password_confirmation: FormDataEntryValue | null;
}

export const actions: Actions = {
    default: async (event) : Promise<DefaultData> => {
        let req = await event.request.formData();

        try {
            const response = await Auth.register({
                name: req.get('name'),
                email: req.get('email'),
                password: req.get('password'),
                password_confirmation: req.get('password_confirmation')
            } as Credentials);
            
            Authentication.saveSession(event as any, response.data?.token);
    
            return {success: true};
        } catch(err) {
            console.log(err)
            const errors = Error.get(err);
            return {success: false, ...errors};
        }
        
    }
};