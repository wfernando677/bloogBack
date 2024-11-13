import { Response, Request } from 'express';
import { handleHttp } from "../utils/error.handle"
import { insertAnswer, getAnswers, getAnswer, updateAnswer, deleteAnswer } from '../services/form';

const getForm = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getAnswer(id)
        const data = response ? response : "NOT_FOUND"
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_FORM')
    }
}

const getFormAll = async (_: Request, res: Response) => {
    try {
        const response = await getAnswers();
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_FORM_ALL')
    }
}

const updateForm = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateAnswer(id, body)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_FORM')
    }
}

const postForm = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const resp = await insertAnswer(body);
        const data = resp ? resp : "NO DATA"
        console.log(data);
        
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_FORM', e)
    }
}

const deleteForm = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteAnswer(id);
        res.send(response)
    } catch (e) {
        res.status(500)
        res.send('ERROR_DELETE_FORM')
    }
}

export {
    getForm,
    getFormAll,
    updateForm,
    postForm,
    deleteForm
}