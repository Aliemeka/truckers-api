import express from 'express';
import {
  createNewTruck,
  editTruck,
  getAllTrucks,
  getTruck,
} from '../controllers/truck.controller';

const router = express.Router();

router.get('/', getAllTrucks);
router.post('/', createNewTruck);
router.get('/:id', getTruck);
router.put('/:id', editTruck);

export default router;
