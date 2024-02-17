import express from 'express';

import {
    createUser
} from '../Controllers/userControllers.js';

const router = express.Router();

router.post('/new',createUser );
/*router.put('/update/:id', deleteUser);
router.delete('/delete/:id', updateUser);*/

export default router;