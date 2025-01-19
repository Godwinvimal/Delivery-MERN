import express from 'express';
import { deleteUser, getUser, storeUser, editUser, updateUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/', getUser);
router.post('/store', storeUser);
router.get('/edit/:id', editUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;
