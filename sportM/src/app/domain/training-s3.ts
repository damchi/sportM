export class TrainingS3 {
  id: string;
  start: Date;
  end: Date;
  memberCategory: string
  daysOfTheWeek: any []

  constructor(id?: string, start?: Date, end?: Date, memberCategory?: string, daysOfTheWeek?: any[]) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.memberCategory = memberCategory;
    this.daysOfTheWeek = daysOfTheWeek;
  }
}
