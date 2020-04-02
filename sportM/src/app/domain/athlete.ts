import {User} from './user';
import {Boat} from './boat';
import {Side} from './side';
import {WeightCategory} from './weight-category';
import {Sex} from "./sex";

export class Athlete extends User {
  // dob: Date;
  weight: string;
  height: string;
  // weightCategory: WeightCategory;
  weightCategory: string;
  boatPreference: string;
  // boatPreference: Boat[];
  side: string;
  // side: Side[];
  userSexId: string;
  status:boolean;


  constructor(weight?: string, height?: string, weightCategory?: string, boatPreference?: string,
              side?: string, userSexId?: string, athleteCategory?: string, status?: boolean ) {


  // constructor(dob?: Date, weight?: string, height?: string, weightCategory?: WeightCategory, boatPreference?: Boat[],
  //             side?: Side[], sex?: string, athleteCategory?: string, status?: boolean ) {
    super();

    // this.dob = dob;
    this.weight = weight;
    this.height = height;
    this.weightCategory = weightCategory;
    this.boatPreference = boatPreference;
    this.side = side;
    this.userSexId = userSexId;
    this.status = status;
  }
}
