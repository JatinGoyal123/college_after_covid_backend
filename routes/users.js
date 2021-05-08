import express from 'express';
import {createUser,getUser} from '../controllers/users.js';
const router=express.Router();
router.post('/',createUser);
router.get('/',getUser);
export default router;