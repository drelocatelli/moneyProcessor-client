import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';
import Authentication from '../Class/Authentication';
import Auth from '../Services/Auth';
import type { Actions } from './$types';

interface Credentials {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
}

export const actions: Actions = {
    default: async (event) : Promise<void> => {
        let req = await event.request.formData();

        const response = await Auth.login({
            email: req.get('email'),
            password: req.get('password')
        } as Credentials);
        
        Authentication.saveSession(event, response.data.token);
    }
};