interface DefaultData {
    success: boolean,
    message?: string,
    errors?: any
    data?: any
}

interface IResumeData {
    start_date: string;
    end_date: string;
}

interface IResumeRE {
    total: number;
    quantity: number;
    average: number;
}

interface IResumeResponse extends DefaultData {
    data?: {
        salary: number;
        balance: number;
        status: 'positivo'| 'negativo';
        revenues: IResumeRE;
        expenses: IResumeRE;
        payload: {
            start_date: string;
            end_date: string;
        }
    }
}

interface IItemsResponse extends DefaultData {
    data?: {
        current_page: number,
        data: IBasicData,
        first_page_url?: string,
        from: number,
        next_page_url?: string,
        path: string,
        per_page: number,
        prev_page_url?: string,
        to: number
    }
}

interface IBasicData {
    id: string;
    user_id: number,
    title: string,
    total: number,
    updated_at: string,
    created_at: string
}

export type {DefaultData, IResumeData, IResumeResponse, IItemsResponse, IBasicData};