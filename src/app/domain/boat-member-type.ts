export class BoatMemberType {
  id: string;
  boatId: string;
  membershipId: string;

  constructor(id?: string, boatId?: string, membershipId?: string) {
    this.id = id;
    this.boatId = boatId;
    this.membershipId = membershipId;
  }
}
