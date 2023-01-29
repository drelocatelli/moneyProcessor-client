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

class CResumeStatus {
    static positive = 'positive';
    static negative = 'negative';
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
        status: CResumeStatus;
        revenues: IResumeRE;
        expenses: IResumeRE;
    }
}

export type {DefaultData, IResumeData, IResumeResponse};