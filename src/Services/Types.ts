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

export type {DefaultData, IResumeData, IResumeResponse};