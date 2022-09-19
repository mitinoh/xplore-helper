export interface Geometry {
  type: string;
  coordinates?: (number)[] | null;
}

export enum GeometryType {
  POINT= "Point"
}