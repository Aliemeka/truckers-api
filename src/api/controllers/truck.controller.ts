import { Truck } from '@prisma/client';
import * as core from 'express-serve-static-core';
import { Request, Response } from 'express';
import {
  getTruckById,
  getTrucks,
  createTruck,
  updateTrunk,
} from '../services/truck.service';
import { CreateTruck, EditTruck } from '../schemas/TruckSchema';

interface Params extends core.ParamsDictionary {
  id: string;
}

export const getAllTrucks = async (req: Request, res: Response) => {
  try {
    const trucks = await getTrucks();
    if (trucks) {
      return res.status(200).json(trucks);
    }
    return res.status(404).json({
      error: 'No trunks found',
    });
  } catch (e: any) {
    return res.status(500).json({
      error: e.message,
    });
  }
};

export const getTruck = async (req: Request, res: Response) => {
  const id = parseInt(req.params.truckId);
  const truck = await getTruckById(id);
  if (truck) {
    return res.status(200).json(truck);
  }
  return res.status(404).json({
    error: 'Truck with id not found',
  });
};

export const createNewTruck = async (
  req: Request<unknown, unknown, CreateTruck>,
  res: Response,
) => {
  try {
    const { name, driver, range, imgSrc } = req.body;
    const truck = await createTruck(name, driver, range, imgSrc);
    if (truck) {
      return res.status(200).json(truck);
    }
    return res.status(500).json({
      error: 'Failed to create truck',
    });
  } catch (e: any) {
    return res.status(500).json({
      error: e.message,
    });
  }
};

export const editTruck = async (
  req: Request<Params, unknown, EditTruck>,
  res: Response<Truck | any>,
) => {
  try {
    const { name, driver, range } = req.body;
    const id = parseInt(req.params.truckId);
    const truck = await updateTrunk(id, name, driver, range);
    if (truck) {
      return res.status(200).json(truck);
    }
    res.status(500).json({ error: 'Failed to update truck details' });
  } catch (e: any) {
    res.status(500).json({ error: e });
  }
};
