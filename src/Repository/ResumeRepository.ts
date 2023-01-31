import Resume from "../Services/Resume";

class ResumeRepository {

    static get(token: string, formData?: FormData) {
        let data = null;
        
        if(formData) {
            data = {
                start_date: formData.get('start_date'),
                end_date: formData.get('end_date')
            };
        }
        
        return Resume.get(data as object, token);
    }
    
}

export default ResumeRepository;