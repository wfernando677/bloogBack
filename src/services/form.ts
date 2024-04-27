import { Form } from '../interfaces/form.interface';
import formModel from '../models/form';

const insertAnswer = async (form: Form) => {
    const responseInsert = await formModel.create(form)
    return responseInsert;
}
const getAnswers = async () => {
    const responseForm = await formModel.find({})
    return responseForm
}
const getAnswer = async (id: string) => {
    const responseForm = await formModel.findOne({ _id: id })
    return responseForm
}
const updateAnswer = async (id: string, data: Form) => {
    const responseForm = await formModel.findOneAndUpdate(
        { _id: id },
        data, { new: true }
    )
    return responseForm
}

const deleteAnswer = async (id: string) => {
    await formModel.deleteOne({ _id: id })
}
export { insertAnswer, getAnswers, getAnswer, updateAnswer, deleteAnswer }