export class TrainingS3 {
  id: string;
  name: string;
  start: string;
  end: string;
  memberCategory: string
  time: any
  daysOfTheWeek: any []

  constructor(id?: string, name?: string, start?: string, end?: string, memberCategory?: string, daysOfTheWeek?: any[], time?: any) {
    this.id = id;
    this.name = name;
    this.start = start;
    this.time = time;
    this.end = end;
    this.memberCategory = memberCategory;
    this.daysOfTheWeek = daysOfTheWeek;
  }
}
