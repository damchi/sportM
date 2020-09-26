export class Training {
  id: string;
  trainingDate: string;
  trainingTime: string;
  athleteCategory: string;
  statut: boolean;
  athleteAttending: any[]

  constructor(id?: string, status?: boolean,trainingDate?: string, trainingTime?: string,
              athleteCategory?: string, athleteAttending?: any[] ) {
    this.id = id;
    this.statut = status;
    this.trainingDate = trainingDate;
    this.trainingTime = trainingTime;
    this.athleteCategory = athleteCategory;
    this.athleteAttending = athleteAttending;
  }
}
