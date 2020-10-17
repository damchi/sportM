import { Injectable } from '@angular/core';
import {
  APIService, BatchAddBoatMemberTypeMutation,
  CreateBoatMemberTypeInput,
  CreateBoatMemberTypeMutation,
  CreateBoatMutation,
  ListBoatsQuery
} from "../API.service";
import {Boat} from "../domain/boat";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor(private api: APIService) {}

   saveBoat(boat: Boat): Promise<CreateBoatMutation> {
   return this.api.CreateBoat(boat);
  }

  saveBoatMemberType(boatMemberTypeInput: CreateBoatMemberTypeInput[]):Promise<Array<BatchAddBoatMemberTypeMutation>>{
    return this.api.BatchAddBoatMemberType(boatMemberTypeInput);
  }

  getBoats(filter) {
    return this.api.ListBoats(filter).then((boat: ListBoatsQuery) =>{
      return boat;
    })
      // this.api.ListBoats();
  }

  async updateBoat(boat: Boat) {
    await this.api.UpdateBoat(boat);
  }
   delete(boat){
     return this.api.UpdateBoat(boat);;
  }
}
