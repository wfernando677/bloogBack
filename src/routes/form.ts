import {Router} from "express"
import { deleteForm, getForm, getFormAll, postForm, updateForm } from "../controllers/form";
const router = Router();
router.get('/:id',getForm)
router.get('/',getFormAll)
router.post('/:id',postForm)
router.put('/:id',updateForm)
router.delete('/:id',deleteForm)

export {router};