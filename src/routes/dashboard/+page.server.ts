import { redirect, type Actions } from "@sveltejs/kit";
import Expenses from "../../Services/Expenses";

export const actions : Actions = {
    createDespesa: async(event): Promise<void> => {
        let req = await event.request.formData();
        const token = event.cookies.get('mp_session');

        if(token) {
            Expenses.create(token, {
                title: req.get('title'),
                total: req.get('total')
            });

            throw redirect(301, '/dashboard/despesas');
        }
        
    }
};