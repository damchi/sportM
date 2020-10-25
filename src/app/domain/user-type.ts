export class UserType {
  id: string;
  type: string;
  boat: any;

  constructor(id?: string, type?: string, boat?: any) {
    this.id = id;
    this.type = type;
    this.boat = boat;
  }
}
