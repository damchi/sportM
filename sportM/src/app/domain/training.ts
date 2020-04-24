export class Training {
  id: string;
  trainingDay: string;
  status: boolean;

  constructor(id?: string, trainingDay?: string, status?: boolean) {
    this.id = id;
    this.trainingDay = trainingDay;
  }
}
