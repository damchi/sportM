import { Injectable } from '@angular/core';
import {APIService} from "../API.service";
import {Athlete} from "../domain/athlete";
import {Observable} from "rxjs";
import {User} from "../domain/user";

@Injectable({
  providedIn: 'root'
})
export class AthleteProfileService {

  constructor(private api: APIService) {
  }

  async save(athlete: Athlete) {
    await this.api.CreateUser(athlete);
  }

 async getAthlete(athleteId: string){
       return  await this.api.GetUser(athleteId)
  }

  async getListSex(){
       return  await this.api.ListSexs();
  }

  async getListTypeBoat(){
       return  await this.api.ListTypeBoats();
  }

  async getListWeightCategory(){
       return  await this.api.ListWeightCategorys();
  }

  async getListSide(){
       return  await this.api.ListSides();
  }

  async updateProfil(athlete: Athlete ){
    return await this.api.UpdateUser(athlete);
  }

}
