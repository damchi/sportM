export class TrainingS3 {
  id: string;
  name: string;
  start: Date;
  end: Date;
  memberCategory: string
  daysOfTheWeek: any []

  constructor(id?: string, name?: string, start?: Date, end?: Date, memberCategory?: string, daysOfTheWeek?: any[]) {
    this.id = id;
    this.name = name;
    this.start = start;
    this.end = end;
    this.memberCategory = memberCategory;
    this.daysOfTheWeek = daysOfTheWeek;
  }
}
