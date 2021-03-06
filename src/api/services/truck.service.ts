import { PrismaClient } from '@prisma/client';
import logger from '../../config/logger';

const prisma = new PrismaClient();

export const getTrucks = async () => {
  try {
    const trucks = await prisma.truck.findMany();
    return trucks;
  } catch {
    logger.error('Failed to fetch trucks');
    throw new Error('Error getting trucks');
  }
};

export const getTruckById = async (id: number) => {
  try {
    return prisma.truck.findFirst({ where: { id } });
  } catch {
    logger.error('Failed to fetch truck');
    throw new Error('Error getting truck');
  }
};

export const createTruck = async (
  name: string,
  driver: string,
  range: number,
  image: string,
) => {
  try {
    const trunk = await prisma.truck.create({
      data: {
        name,
        driver,
        range,
        imageSrc: image,
      },
    });
    return trunk;
  } catch {
    logger.error('Error creating truck');
    throw new Error('Error creating truck');
  }
};

export const updateTrunk = async (
  id: number,
  name: string,
  driver: string,
  range: number,
) => {
  try {
    const trunk = await prisma.truck.update({
      where: { id },
      data: { name, driver, range },
    });
    return trunk;
  } catch {
    logger.error('Failed to update truck');
    throw new Error('Error updating truck');
  }
};
