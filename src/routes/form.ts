import {Router} from "express"
import { deleteForm, getForm, getFormAll, postForm, updateForm } from "../controllers/form";
import { auth } from "../auth/auth";
const router = Router();
router.get('/:id',auth,getForm)
router.get('/',auth,getFormAll)
router.post('/',auth,postForm)
router.put('/:id',auth,updateForm)
router.delete('/:id',auth,deleteForm)

export {router};