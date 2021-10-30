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
router.get('/:truckId', getTruck);
router.put('/:truckId', editTruck);

export default router;
