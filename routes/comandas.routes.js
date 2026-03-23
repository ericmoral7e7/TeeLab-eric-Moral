import { Router } from 'express';
import * as comandasController from '../controllers/comandas.controller.js';

const router = Router();

router.post("/", comandasController.create); 

export default router;