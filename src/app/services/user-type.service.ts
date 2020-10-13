import { Injectable } from '@angular/core';
import {APIService} from "../API.service";
import {UserType} from "../domain/user-type";

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  constructor(private api: APIService) {}

  async saveUserType(type: UserType) {
    await this.api.CreateUserType(type);
  }

  async getUserType() {
    return await this.api.ListUserTypes();
  }

  async updateUserType(type: UserType) {
    await this.api.UpdateUserType(type);
  }
  async deleteUserType(UserTypeId) {
    await this.api.DeleteUserType(UserTypeId);
  }}
