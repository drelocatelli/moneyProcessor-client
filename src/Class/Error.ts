interface IError {
    errors: any;
    message: string;
}

class Error {

    static get(err: any) : IError {
        const errors = err.response.data;
        const message = err.response.data?.message ?? 'Ocorreu um erro inesperado.'
        return {message, errors};
    }

}

export default Error;