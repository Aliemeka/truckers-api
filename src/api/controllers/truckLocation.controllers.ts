import { TruckLocation } from '@prisma/client';
import * as core from 'express-serve-static-core';
import { Request, Response } from 'express';
import {
  createLocation,
  getLocations,
} from '../services/trucklocation.service';
import { CreateLocation } from '../schemas/TruckSchema';

interface Params extends core.ParamsDictionary {
  id: string;
}

export const getTruckLocations = async (
  req: Request,
  res: Response<TruckLocation | any>,
) => {
  try {
    const { truckId } = req.params;
    const id = parseInt(truckId);
    const trucks = await getLocations(id);
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

export const addTruckLocation = async (
  req: Request<Params, unknown, CreateLocation>,
  res: Response,
) => {
  try {
    const truckId = parseInt(req.params.truckId);
    const { longitude, lattitude } = req.body;
    const truck = await createLocation(truckId, longitude, lattitude);
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
