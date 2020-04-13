import {User} from './user';

export class Athlete extends User {
  dob: string;
  height: string;
  weightCategory: string;
  boatPreference: any;
  side: any;
  sex: string;
  status:boolean;

  constructor(dob?: string, height?: string, weightCategory?: any, boatPreference?: any,
              side?: any, userSexId?: string, athleteCategory?: string, status?: boolean ) {
    super();

    this.dob = dob;
    this.height = height;
    this.weightCategory = weightCategory;
    this.boatPreference = boatPreference;
    this.side = side;
    this.sex = userSexId;
    this.status = status;
  }
}
