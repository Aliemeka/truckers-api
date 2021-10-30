import { PrismaClient } from '@prisma/client';
import logger from '../../config/logger';

const prisma = new PrismaClient();

export const getLocations = async (truckId: number) => {
  try {
    const locations = await prisma.truckLocation.findMany({
      where: { truckId },
    });
    return locations;
  } catch {
    logger.error('Failed to fetch locations of this truck');
    throw new Error('Error getting locations of this truck');
  }
};

export const createLocation = async (
  truckId: number,
  longitude: number,
  latitude: number,
) => {
  try {
    const trunk = await prisma.truckLocation.create({
      data: {
        longitude,
        latitude,
        truckId,
      },
    });
    return trunk;
  } catch {
    logger.error('Error creating truck');
    throw new Error('Error creating truck');
  }
};
