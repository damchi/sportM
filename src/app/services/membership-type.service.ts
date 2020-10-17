import { Injectable } from '@angular/core';
import {APIService} from "../API.service";
import {UserType} from "../domain/user-type";

@Injectable({
  providedIn: 'root'
})
export class MembershipTypeService {

  constructor(private api: APIService) {}

  async saveUserType(type: UserType) {
    await this.api.CreateMembershipType(type);
  }

  async getUserType() {
    return await this.api.ListMembershipTypes();
  }

  async updateUserType(type: UserType) {
    await this.api.UpdateMembershipType(type);
  }
  async deleteUserType(UserTypeId) {
    await this.api.DeleteMembershipType(UserTypeId);
  }}
