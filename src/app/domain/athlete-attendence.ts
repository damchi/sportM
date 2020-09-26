export class AthleteAttendence {
  id: string;
  trainingID: string
  athleteID: string
  attending: string

  constructor(id?: string, trainingID?: string, athleteID?: string, attending?: string) {
    this.id = id;
    this.athleteID = athleteID;
    this.trainingID = trainingID
    this.attending = attending

  }

}
