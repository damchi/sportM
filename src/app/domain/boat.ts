import {Membership} from "./membership";

export class Boat {
  id: string;
  name: string;
  ownership: string;
  weightCategory: string;
  membershipType: string;
  sortOfBoat: string;
  note: string;
  active: boolean;
  deleted_at: string;

  constructor(id?: string, name?: string,ownership?: string, weightCategory?: string,
              membershipType?: string, sortOfBoat?: string, note?: string,deleted_at?: string,active?: boolean ) {

    // constructor(id?: string, name?: string,ownership?: string, weightCategory?: string,
    //            sortOfBoat?: string, note?: string,active?: boolean ) {
    this.id = id;
    this.name = name;
    this.ownership = ownership;
    this.weightCategory = weightCategory;
    this.membershipType = membershipType;
    this.sortOfBoat = sortOfBoat;
    this.note = note;
    this.active = active;
    this.deleted_at = deleted_at;
  }
}
