export interface CreateTruck {
  name: string;
  driver: string;
  range: number;
  imgSrc: string;
}

export interface EditTruck {
  name: string;
  driver: string;
  range: number;
  imgSrc: string;
}

export interface CreateLocation {
  longitude: number;
  lattitude: number;
}
