import Resume from "../Services/Resume";

class ResumeRepository {

    static get(formData?: FormData, token: string) {
        let data = null;
        
        if(formData) {
            data = {
                start_date: formData.get('start_date'),
                end_date: formData.get('end_date')
            };
        }
        
        return Resume.get(data, token);
    }
    
}

export default ResumeRepository;