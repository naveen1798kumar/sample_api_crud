import express, { Router } from 'express';
import { ContactIndex } from '../controllers/contact.controller.js';

const router = express.Router()

router.get('/', ContactIndex)

export default router;