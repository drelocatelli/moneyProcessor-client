import Resume from "../Services/Resume";

class ResumeRepository {

    static get(formData: FormData, token: string) {
        return Resume.get({
            start_date: formData.get('start_date'),
            end_date: formData.get('end_date')
        }, token);
    }
    
}

export default ResumeRepository;