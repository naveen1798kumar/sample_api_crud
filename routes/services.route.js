import express from 'express';
import { ServiceCreate, ServiceDelete, ServiceFindById, ServiceIndex, ServiceUpdate } from '../controllers/services.controller.js';

const router = express.Router();

// Read 
router.get('/', ServiceIndex)

// Find by ID
router.get('/:id', ServiceFindById)

// Create
router.post('/', ServiceCreate)

// Update
router.put('/:id', ServiceUpdate)

// Delete
router.delete('/:id', ServiceDelete)

export default router;