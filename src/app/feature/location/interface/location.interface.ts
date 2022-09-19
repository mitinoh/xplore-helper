import { Geometry } from "./geometry.interface";
import { User } from "./user.interface";

export interface Location {
  _id: string;
  name: string;
  desc: string;
  indication: string;
  locationCategory?: string[];
  insertUid?: User;
  geometry: Geometry;
  cdate: string;
  base64: string;
}


