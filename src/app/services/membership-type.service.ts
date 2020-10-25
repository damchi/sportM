import { Injectable } from '@angular/core';
import {APIService, ListMembershipTypesQuery} from "../API.service";
import {UserType} from "../domain/user-type";

@Injectable({
  providedIn: 'root'
})
export class MembershipTypeService {

  constructor(private api: APIService) {}

  async saveUserType(type: UserType) {
    await this.api.CreateMembershipType(type);
  }

  getUserType() {
    return  this.api.ListMembershipTypes().then((user:ListMembershipTypesQuery) =>{
      return user;
    });
  }

   updateUserType(type: UserType) {
    return  this.api.UpdateMembershipType(type);
  }
  deleteUserType(UserTypeId) {
    return this.api.DeleteMembershipType(UserTypeId);
  }}
