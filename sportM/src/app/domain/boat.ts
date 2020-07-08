export class Boat {
  id: string;
  name: string;
  ownership: string;
  weightCategory: string;
  membershipType: string;
  sortOfBoat: string;
  note: string;
  active: boolean;

  constructor(id?: string, name?: string,ownership?: string, weightCategory?: string,
              membershipType?: string, sortOfBoat?: string, note?: string,active?: boolean ) {
    this.id = id;
    this.name = name;
    this.ownership = ownership;
    this.weightCategory = weightCategory;
    this.membershipType = membershipType;
    this.sortOfBoat = sortOfBoat;
    this.note = note;
    this.active = active;
  }
}
