import {User} from './user';
import {Boat} from './boat';
import {Side} from './side';
import {WeightCategory} from './weight-category';
import {Sex} from "./sex";
import {TypeBoat} from "./type-boat";

export class Athlete extends User {
  // dob: Date;
  height: string;
  weightCategory: string;
  boatPreference: any;
  side: any;
  sex: string;
  status:boolean;

  constructor(dob?: Date, height?: string, weightCategory?: any, boatPreference?: any,
              side?: any, userSexId?: string, athleteCategory?: string, status?: boolean ) {
    super();

    // this.dob = dob;
    this.height = height;
    this.weightCategory = weightCategory;
    this.boatPreference = boatPreference;
    this.side = side;
    this.sex = userSexId;
    this.status = status;
  }
}
