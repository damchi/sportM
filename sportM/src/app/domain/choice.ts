export class Choice {
  attending: string;
  type: string;

  constructor(attending?: string, type?: string) {
    this.attending = attending;
    this.type = type;
  }
}
