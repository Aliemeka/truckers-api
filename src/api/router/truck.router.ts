import express from 'express';
import {
  createNewTruck,
  editTruck,
  getAllTrucks,
  getTruck,
} from '../controllers/truck.controller';
import {
  addTruckLocation,
  getTruckLocations,
} from '../controllers/truckLocation.controllers';

const router = express.Router();

router.get('/', getAllTrucks);
router.post('/', createNewTruck);
router.get('/:truckId', getTruck);
router.put('/:truckId', editTruck);

router.get('/:truckId/locations', getTruckLocations);
router.post('/:truckId/locations', addTruckLocation);

export default router;
