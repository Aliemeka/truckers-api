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

export interface Params extends core.ParamsDictionary {
  id: string;
}

export const getAllTrucks = async (req: Request, res: Response) => {
  const trucks = await getTrucks();
  if (trucks) {
    return res.status(200).json(trucks);
  }
  return res.status(404).json({
    error: 'No trunks found',
  });
};

export const getTruck = async (req: Request, res: Response) => {
  const id = parseInt(req.params.trunkId);
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
  const { name, driver, range, imgSrc } = req.body;
  const truck = await createTruck(name, driver, range, imgSrc);
  if (truck) {
    return res.status(200).json(truck);
  }
  return res.status(500).json({
    error: 'Failed to create truck',
  });
};

export const editTruck = async (
  req: Request<Params, unknown, EditTruck>,
  res: Response<Truck | any>,
) => {
  const { name, driver, range } = req.body;
  const id = parseInt(req.params.trunkId);
  const truck = await updateTrunk(id, name, driver, range);
  if (truck) {
    return res.status(200).json(truck);
  }
  res.status(500).json({ error: 'Failed to update truck details' });
};
