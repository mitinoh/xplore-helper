import { Geometry } from "./geometry.interface";
import { LocationCategory } from "./location-category.interface";
import { User } from "./user.interface";

export interface Location {
  _id: string;
  name: string;
  desc: string;
  indication?: string;
  locationCategory?: LocationCategory[];
  uid?: User;
  geometry: Geometry;
  cdate?: string;
  base64?: string;
}


