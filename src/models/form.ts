import { Schema, model } from "mongoose";
import { Form } from "../interfaces/form.interface";

const FormSchema = new Schema<Form>(
    {
        description: { type: String }

    },
    {
        timestamps: true,
        versionKey: false
    }
)

const formModel = model('form', FormSchema)
export default formModel