export class BoatMemberType {
  id: string;
  boatId: string;
  memberId: string;

  constructor(id?: string, boatId?: string, memberId?: string) {
    this.id = id;
    this.boatId = boatId;
    this.memberId = memberId;
  }
}
