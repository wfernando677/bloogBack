import {Schema,model,Types,Model} from "mongoose";
import { Form } from "../interfaces/form.interface";

const FormSchema= new Schema<Form>(
    {
        answers:{
            type:String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const formModel=model('form',FormSchema)
export default formModel