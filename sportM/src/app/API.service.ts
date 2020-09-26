/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateAthleteAttendenceInput = {
  id?: string | null;
  trainingID: string;
  athleteID: string;
  attending?: string | null;
};

export type CreateUserInput = {
  id?: string | null;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob?: string | null;
  height?: string | null;
  weightCategory?: string | null;
  boatPreference?: string | null;
  side?: string | null;
  sex?: string | null;
  status?: boolean | null;
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  membershipType?: ModelStringInput | null;
  email?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  height?: ModelStringInput | null;
  weightCategory?: ModelStringInput | null;
  boatPreference?: ModelStringInput | null;
  side?: ModelStringInput | null;
  sex?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateUserInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  membershipType?: string | null;
  email?: string | null;
  dob?: string | null;
  height?: string | null;
  weightCategory?: string | null;
  boatPreference?: string | null;
  side?: string | null;
  sex?: string | null;
  status?: boolean | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateBoatInput = {
  id?: string | null;
  name: string;
  ownership: string;
  membershipType: string;
  weightCategory: string;
  sortOfBoat: string;
  note?: string | null;
  active: boolean;
};

export type ModelBoatConditionInput = {
  name?: ModelStringInput | null;
  ownership?: ModelStringInput | null;
  membershipType?: ModelStringInput | null;
  weightCategory?: ModelStringInput | null;
  sortOfBoat?: ModelStringInput | null;
  note?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  and?: Array<ModelBoatConditionInput | null> | null;
  or?: Array<ModelBoatConditionInput | null> | null;
  not?: ModelBoatConditionInput | null;
};

export type UpdateBoatInput = {
  id: string;
  name?: string | null;
  ownership?: string | null;
  membershipType?: string | null;
  weightCategory?: string | null;
  sortOfBoat?: string | null;
  note?: string | null;
  active?: boolean | null;
};

export type DeleteBoatInput = {
  id?: string | null;
};

export type CreateTrainingInput = {
  id?: string | null;
  trainingDate: string;
  statut?: boolean | null;
  athleteCategory?: string | null;
  trainingTime?: string | null;
};

export type ModelTrainingConditionInput = {
  trainingDate?: ModelStringInput | null;
  statut?: ModelBooleanInput | null;
  athleteCategory?: ModelStringInput | null;
  trainingTime?: ModelStringInput | null;
  and?: Array<ModelTrainingConditionInput | null> | null;
  or?: Array<ModelTrainingConditionInput | null> | null;
  not?: ModelTrainingConditionInput | null;
};

export type UpdateTrainingInput = {
  id: string;
  trainingDate?: string | null;
  statut?: boolean | null;
  athleteCategory?: string | null;
  trainingTime?: string | null;
};

export type DeleteTrainingInput = {
  id?: string | null;
};

export type ModelAthleteAttendenceConditionInput = {
  trainingID?: ModelIDInput | null;
  athleteID?: ModelIDInput | null;
  attending?: ModelStringInput | null;
  and?: Array<ModelAthleteAttendenceConditionInput | null> | null;
  or?: Array<ModelAthleteAttendenceConditionInput | null> | null;
  not?: ModelAthleteAttendenceConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateAthleteAttendenceInput = {
  id: string;
  trainingID?: string | null;
  athleteID?: string | null;
  attending?: string | null;
};

export type DeleteAthleteAttendenceInput = {
  id?: string | null;
};

export type CreateBoatListInput = {
  id?: string | null;
  trainingID: string;
  athleteID: string;
  boatID: string;
};

export type ModelBoatListConditionInput = {
  trainingID?: ModelIDInput | null;
  athleteID?: ModelIDInput | null;
  boatID?: ModelIDInput | null;
  and?: Array<ModelBoatListConditionInput | null> | null;
  or?: Array<ModelBoatListConditionInput | null> | null;
  not?: ModelBoatListConditionInput | null;
};

export type UpdateBoatListInput = {
  id: string;
  trainingID?: string | null;
  athleteID?: string | null;
  boatID?: string | null;
};

export type DeleteBoatListInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  membershipType?: ModelStringInput | null;
  email?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  height?: ModelStringInput | null;
  weightCategory?: ModelStringInput | null;
  boatPreference?: ModelStringInput | null;
  side?: ModelStringInput | null;
  sex?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelBoatFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  ownership?: ModelStringInput | null;
  membershipType?: ModelStringInput | null;
  weightCategory?: ModelStringInput | null;
  sortOfBoat?: ModelStringInput | null;
  note?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  and?: Array<ModelBoatFilterInput | null> | null;
  or?: Array<ModelBoatFilterInput | null> | null;
  not?: ModelBoatFilterInput | null;
};

export type ModelTrainingFilterInput = {
  id?: ModelIDInput | null;
  trainingDate?: ModelStringInput | null;
  statut?: ModelBooleanInput | null;
  athleteCategory?: ModelStringInput | null;
  trainingTime?: ModelStringInput | null;
  and?: Array<ModelTrainingFilterInput | null> | null;
  or?: Array<ModelTrainingFilterInput | null> | null;
  not?: ModelTrainingFilterInput | null;
};

export type BatchAddAthleteAttendenceMutation = {
  __typename: "AthleteAttendence";
  id: string;
  trainingID: string;
  athleteID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
  training: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boat: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
  training: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boat: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
  training: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boat: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBoatMutation = {
  __typename: "Boat";
  id: string;
  name: string;
  ownership: string;
  membershipType: string;
  weightCategory: string;
  sortOfBoat: string;
  note: string | null;
  active: boolean;
  training: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBoatMutation = {
  __typename: "Boat";
  id: string;
  name: string;
  ownership: string;
  membershipType: string;
  weightCategory: string;
  sortOfBoat: string;
  note: string | null;
  active: boolean;
  training: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBoatMutation = {
  __typename: "Boat";
  id: string;
  name: string;
  ownership: string;
  membershipType: string;
  weightCategory: string;
  sortOfBoat: string;
  note: string | null;
  active: boolean;
  training: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTrainingMutation = {
  __typename: "Training";
  id: string;
  trainingDate: string;
  statut: boolean | null;
  athleteCategory: string | null;
  trainingTime: string | null;
  athleteAttending: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boatTraining: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTrainingMutation = {
  __typename: "Training";
  id: string;
  trainingDate: string;
  statut: boolean | null;
  athleteCategory: string | null;
  trainingTime: string | null;
  athleteAttending: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boatTraining: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTrainingMutation = {
  __typename: "Training";
  id: string;
  trainingDate: string;
  statut: boolean | null;
  athleteCategory: string | null;
  trainingTime: string | null;
  athleteAttending: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boatTraining: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAthleteAttendenceMutation = {
  __typename: "AthleteAttendence";
  id: string;
  trainingID: string;
  athleteID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAthleteAttendenceMutation = {
  __typename: "AthleteAttendence";
  id: string;
  trainingID: string;
  athleteID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAthleteAttendenceMutation = {
  __typename: "AthleteAttendence";
  id: string;
  trainingID: string;
  athleteID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBoatListMutation = {
  __typename: "BoatList";
  id: string;
  trainingID: string;
  athleteID: string;
  boatID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  boat: {
    __typename: "Boat";
    id: string;
    name: string;
    ownership: string;
    membershipType: string;
    weightCategory: string;
    sortOfBoat: string;
    note: string | null;
    active: boolean;
    training: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateBoatListMutation = {
  __typename: "BoatList";
  id: string;
  trainingID: string;
  athleteID: string;
  boatID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  boat: {
    __typename: "Boat";
    id: string;
    name: string;
    ownership: string;
    membershipType: string;
    weightCategory: string;
    sortOfBoat: string;
    note: string | null;
    active: boolean;
    training: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteBoatListMutation = {
  __typename: "BoatList";
  id: string;
  trainingID: string;
  athleteID: string;
  boatID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  boat: {
    __typename: "Boat";
    id: string;
    name: string;
    ownership: string;
    membershipType: string;
    weightCategory: string;
    sortOfBoat: string;
    note: string | null;
    active: boolean;
    training: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type BatchGetAthleteAttendenceQuery = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
  training: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boat: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
  training: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boat: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetBoatQuery = {
  __typename: "Boat";
  id: string;
  name: string;
  ownership: string;
  membershipType: string;
  weightCategory: string;
  sortOfBoat: string;
  note: string | null;
  active: boolean;
  training: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBoatsQuery = {
  __typename: "ModelBoatConnection";
  items: Array<{
    __typename: "Boat";
    id: string;
    name: string;
    ownership: string;
    membershipType: string;
    weightCategory: string;
    sortOfBoat: string;
    note: string | null;
    active: boolean;
    training: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTrainingQuery = {
  __typename: "Training";
  id: string;
  trainingDate: string;
  statut: boolean | null;
  athleteCategory: string | null;
  trainingTime: string | null;
  athleteAttending: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boatTraining: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTrainingsQuery = {
  __typename: "ModelTrainingConnection";
  items: Array<{
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
  training: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boat: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
  training: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boat: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
  training: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boat: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBoatSubscription = {
  __typename: "Boat";
  id: string;
  name: string;
  ownership: string;
  membershipType: string;
  weightCategory: string;
  sortOfBoat: string;
  note: string | null;
  active: boolean;
  training: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBoatSubscription = {
  __typename: "Boat";
  id: string;
  name: string;
  ownership: string;
  membershipType: string;
  weightCategory: string;
  sortOfBoat: string;
  note: string | null;
  active: boolean;
  training: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBoatSubscription = {
  __typename: "Boat";
  id: string;
  name: string;
  ownership: string;
  membershipType: string;
  weightCategory: string;
  sortOfBoat: string;
  note: string | null;
  active: boolean;
  training: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTrainingSubscription = {
  __typename: "Training";
  id: string;
  trainingDate: string;
  statut: boolean | null;
  athleteCategory: string | null;
  trainingTime: string | null;
  athleteAttending: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boatTraining: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTrainingSubscription = {
  __typename: "Training";
  id: string;
  trainingDate: string;
  statut: boolean | null;
  athleteCategory: string | null;
  trainingTime: string | null;
  athleteAttending: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boatTraining: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTrainingSubscription = {
  __typename: "Training";
  id: string;
  trainingDate: string;
  statut: boolean | null;
  athleteCategory: string | null;
  trainingTime: string | null;
  athleteAttending: {
    __typename: "ModelAthleteAttendenceConnection";
    items: Array<{
      __typename: "AthleteAttendence";
      id: string;
      trainingID: string;
      athleteID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      attending: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  boatTraining: {
    __typename: "ModelBoatListConnection";
    items: Array<{
      __typename: "BoatList";
      id: string;
      trainingID: string;
      athleteID: string;
      boatID: string;
      training: {
        __typename: "Training";
        id: string;
        trainingDate: string;
        statut: boolean | null;
        athleteCategory: string | null;
        trainingTime: string | null;
        createdAt: string;
        updatedAt: string;
      };
      boat: {
        __typename: "Boat";
        id: string;
        name: string;
        ownership: string;
        membershipType: string;
        weightCategory: string;
        sortOfBoat: string;
        note: string | null;
        active: boolean;
        createdAt: string;
        updatedAt: string;
      };
      athlete: {
        __typename: "User";
        id: string;
        firstName: string;
        lastName: string;
        membershipType: string;
        email: string;
        dob: string | null;
        height: string | null;
        weightCategory: string | null;
        boatPreference: string | null;
        side: string | null;
        sex: string | null;
        status: boolean | null;
        createdAt: string;
        updatedAt: string;
      };
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAthleteAttendenceSubscription = {
  __typename: "AthleteAttendence";
  id: string;
  trainingID: string;
  athleteID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAthleteAttendenceSubscription = {
  __typename: "AthleteAttendence";
  id: string;
  trainingID: string;
  athleteID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAthleteAttendenceSubscription = {
  __typename: "AthleteAttendence";
  id: string;
  trainingID: string;
  athleteID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBoatListSubscription = {
  __typename: "BoatList";
  id: string;
  trainingID: string;
  athleteID: string;
  boatID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  boat: {
    __typename: "Boat";
    id: string;
    name: string;
    ownership: string;
    membershipType: string;
    weightCategory: string;
    sortOfBoat: string;
    note: string | null;
    active: boolean;
    training: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBoatListSubscription = {
  __typename: "BoatList";
  id: string;
  trainingID: string;
  athleteID: string;
  boatID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  boat: {
    __typename: "Boat";
    id: string;
    name: string;
    ownership: string;
    membershipType: string;
    weightCategory: string;
    sortOfBoat: string;
    note: string | null;
    active: boolean;
    training: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBoatListSubscription = {
  __typename: "BoatList";
  id: string;
  trainingID: string;
  athleteID: string;
  boatID: string;
  training: {
    __typename: "Training";
    id: string;
    trainingDate: string;
    statut: boolean | null;
    athleteCategory: string | null;
    trainingTime: string | null;
    athleteAttending: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boatTraining: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  boat: {
    __typename: "Boat";
    id: string;
    name: string;
    ownership: string;
    membershipType: string;
    weightCategory: string;
    sortOfBoat: string;
    note: string | null;
    active: boolean;
    training: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
    training: {
      __typename: "ModelAthleteAttendenceConnection";
      items: Array<{
        __typename: "AthleteAttendence";
        id: string;
        trainingID: string;
        athleteID: string;
        attending: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    boat: {
      __typename: "ModelBoatListConnection";
      items: Array<{
        __typename: "BoatList";
        id: string;
        trainingID: string;
        athleteID: string;
        boatID: string;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async BatchAddAthleteAttendence(
    athleteAttendence?: Array<CreateAthleteAttendenceInput | null>
  ): Promise<Array<BatchAddAthleteAttendenceMutation>> {
    const statement = `mutation BatchAddAthleteAttendence($athleteAttendence: [CreateAthleteAttendenceInput]) {
        batchAddAthleteAttendence(athleteAttendence: $athleteAttendence) {
          __typename
          id
          trainingID
          athleteID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attending
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (athleteAttendence) {
      gqlAPIServiceArguments.athleteAttendence = athleteAttendence;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<BatchAddAthleteAttendenceMutation>>(
      response.data.batchAddAthleteAttendence
    );
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          membershipType
          email
          dob
          height
          weightCategory
          boatPreference
          side
          sex
          status
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boat {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          membershipType
          email
          dob
          height
          weightCategory
          boatPreference
          side
          sex
          status
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boat {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          membershipType
          email
          dob
          height
          weightCategory
          boatPreference
          side
          sex
          status
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boat {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateBoat(
    input: CreateBoatInput,
    condition?: ModelBoatConditionInput
  ): Promise<CreateBoatMutation> {
    const statement = `mutation CreateBoat($input: CreateBoatInput!, $condition: ModelBoatConditionInput) {
        createBoat(input: $input, condition: $condition) {
          __typename
          id
          name
          ownership
          membershipType
          weightCategory
          sortOfBoat
          note
          active
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBoatMutation>response.data.createBoat;
  }
  async UpdateBoat(
    input: UpdateBoatInput,
    condition?: ModelBoatConditionInput
  ): Promise<UpdateBoatMutation> {
    const statement = `mutation UpdateBoat($input: UpdateBoatInput!, $condition: ModelBoatConditionInput) {
        updateBoat(input: $input, condition: $condition) {
          __typename
          id
          name
          ownership
          membershipType
          weightCategory
          sortOfBoat
          note
          active
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBoatMutation>response.data.updateBoat;
  }
  async DeleteBoat(
    input: DeleteBoatInput,
    condition?: ModelBoatConditionInput
  ): Promise<DeleteBoatMutation> {
    const statement = `mutation DeleteBoat($input: DeleteBoatInput!, $condition: ModelBoatConditionInput) {
        deleteBoat(input: $input, condition: $condition) {
          __typename
          id
          name
          ownership
          membershipType
          weightCategory
          sortOfBoat
          note
          active
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBoatMutation>response.data.deleteBoat;
  }
  async CreateTraining(
    input: CreateTrainingInput,
    condition?: ModelTrainingConditionInput
  ): Promise<CreateTrainingMutation> {
    const statement = `mutation CreateTraining($input: CreateTrainingInput!, $condition: ModelTrainingConditionInput) {
        createTraining(input: $input, condition: $condition) {
          __typename
          id
          trainingDate
          statut
          athleteCategory
          trainingTime
          athleteAttending {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boatTraining {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTrainingMutation>response.data.createTraining;
  }
  async UpdateTraining(
    input: UpdateTrainingInput,
    condition?: ModelTrainingConditionInput
  ): Promise<UpdateTrainingMutation> {
    const statement = `mutation UpdateTraining($input: UpdateTrainingInput!, $condition: ModelTrainingConditionInput) {
        updateTraining(input: $input, condition: $condition) {
          __typename
          id
          trainingDate
          statut
          athleteCategory
          trainingTime
          athleteAttending {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boatTraining {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTrainingMutation>response.data.updateTraining;
  }
  async DeleteTraining(
    input: DeleteTrainingInput,
    condition?: ModelTrainingConditionInput
  ): Promise<DeleteTrainingMutation> {
    const statement = `mutation DeleteTraining($input: DeleteTrainingInput!, $condition: ModelTrainingConditionInput) {
        deleteTraining(input: $input, condition: $condition) {
          __typename
          id
          trainingDate
          statut
          athleteCategory
          trainingTime
          athleteAttending {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boatTraining {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTrainingMutation>response.data.deleteTraining;
  }
  async CreateAthleteAttendence(
    input: CreateAthleteAttendenceInput,
    condition?: ModelAthleteAttendenceConditionInput
  ): Promise<CreateAthleteAttendenceMutation> {
    const statement = `mutation CreateAthleteAttendence($input: CreateAthleteAttendenceInput!, $condition: ModelAthleteAttendenceConditionInput) {
        createAthleteAttendence(input: $input, condition: $condition) {
          __typename
          id
          trainingID
          athleteID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attending
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAthleteAttendenceMutation>(
      response.data.createAthleteAttendence
    );
  }
  async UpdateAthleteAttendence(
    input: UpdateAthleteAttendenceInput,
    condition?: ModelAthleteAttendenceConditionInput
  ): Promise<UpdateAthleteAttendenceMutation> {
    const statement = `mutation UpdateAthleteAttendence($input: UpdateAthleteAttendenceInput!, $condition: ModelAthleteAttendenceConditionInput) {
        updateAthleteAttendence(input: $input, condition: $condition) {
          __typename
          id
          trainingID
          athleteID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attending
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAthleteAttendenceMutation>(
      response.data.updateAthleteAttendence
    );
  }
  async DeleteAthleteAttendence(
    input: DeleteAthleteAttendenceInput,
    condition?: ModelAthleteAttendenceConditionInput
  ): Promise<DeleteAthleteAttendenceMutation> {
    const statement = `mutation DeleteAthleteAttendence($input: DeleteAthleteAttendenceInput!, $condition: ModelAthleteAttendenceConditionInput) {
        deleteAthleteAttendence(input: $input, condition: $condition) {
          __typename
          id
          trainingID
          athleteID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attending
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAthleteAttendenceMutation>(
      response.data.deleteAthleteAttendence
    );
  }
  async CreateBoatList(
    input: CreateBoatListInput,
    condition?: ModelBoatListConditionInput
  ): Promise<CreateBoatListMutation> {
    const statement = `mutation CreateBoatList($input: CreateBoatListInput!, $condition: ModelBoatListConditionInput) {
        createBoatList(input: $input, condition: $condition) {
          __typename
          id
          trainingID
          athleteID
          boatID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          boat {
            __typename
            id
            name
            ownership
            membershipType
            weightCategory
            sortOfBoat
            note
            active
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBoatListMutation>response.data.createBoatList;
  }
  async UpdateBoatList(
    input: UpdateBoatListInput,
    condition?: ModelBoatListConditionInput
  ): Promise<UpdateBoatListMutation> {
    const statement = `mutation UpdateBoatList($input: UpdateBoatListInput!, $condition: ModelBoatListConditionInput) {
        updateBoatList(input: $input, condition: $condition) {
          __typename
          id
          trainingID
          athleteID
          boatID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          boat {
            __typename
            id
            name
            ownership
            membershipType
            weightCategory
            sortOfBoat
            note
            active
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBoatListMutation>response.data.updateBoatList;
  }
  async DeleteBoatList(
    input: DeleteBoatListInput,
    condition?: ModelBoatListConditionInput
  ): Promise<DeleteBoatListMutation> {
    const statement = `mutation DeleteBoatList($input: DeleteBoatListInput!, $condition: ModelBoatListConditionInput) {
        deleteBoatList(input: $input, condition: $condition) {
          __typename
          id
          trainingID
          athleteID
          boatID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          boat {
            __typename
            id
            name
            ownership
            membershipType
            weightCategory
            sortOfBoat
            note
            active
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBoatListMutation>response.data.deleteBoatList;
  }
  async BatchGetAthleteAttendence(
    ids?: Array<string | null>
  ): Promise<Array<BatchGetAthleteAttendenceQuery>> {
    const statement = `query BatchGetAthleteAttendence($ids: [ID]) {
        batchGetAthleteAttendence(ids: $ids) {
          __typename
          id
          firstName
          lastName
          membershipType
          email
          dob
          height
          weightCategory
          boatPreference
          side
          sex
          status
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boat {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (ids) {
      gqlAPIServiceArguments.ids = ids;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<BatchGetAthleteAttendenceQuery>>(
      response.data.batchGetAthleteAttendence
    );
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          firstName
          lastName
          membershipType
          email
          dob
          height
          weightCategory
          boatPreference
          side
          sex
          status
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boat {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetBoat(id: string): Promise<GetBoatQuery> {
    const statement = `query GetBoat($id: ID!) {
        getBoat(id: $id) {
          __typename
          id
          name
          ownership
          membershipType
          weightCategory
          sortOfBoat
          note
          active
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBoatQuery>response.data.getBoat;
  }
  async ListBoats(
    filter?: ModelBoatFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBoatsQuery> {
    const statement = `query ListBoats($filter: ModelBoatFilterInput, $limit: Int, $nextToken: String) {
        listBoats(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            ownership
            membershipType
            weightCategory
            sortOfBoat
            note
            active
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBoatsQuery>response.data.listBoats;
  }
  async GetTraining(id: string): Promise<GetTrainingQuery> {
    const statement = `query GetTraining($id: ID!) {
        getTraining(id: $id) {
          __typename
          id
          trainingDate
          statut
          athleteCategory
          trainingTime
          athleteAttending {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boatTraining {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTrainingQuery>response.data.getTraining;
  }
  async ListTrainings(
    filter?: ModelTrainingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTrainingsQuery> {
    const statement = `query ListTrainings($filter: ModelTrainingFilterInput, $limit: Int, $nextToken: String) {
        listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTrainingsQuery>response.data.listTrainings;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          firstName
          lastName
          membershipType
          email
          dob
          height
          weightCategory
          boatPreference
          side
          sex
          status
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boat {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          firstName
          lastName
          membershipType
          email
          dob
          height
          weightCategory
          boatPreference
          side
          sex
          status
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boat {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          firstName
          lastName
          membershipType
          email
          dob
          height
          weightCategory
          boatPreference
          side
          sex
          status
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boat {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateBoatListener: Observable<OnCreateBoatSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateBoat {
        onCreateBoat {
          __typename
          id
          name
          ownership
          membershipType
          weightCategory
          sortOfBoat
          note
          active
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateBoatSubscription>;

  OnUpdateBoatListener: Observable<OnUpdateBoatSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBoat {
        onUpdateBoat {
          __typename
          id
          name
          ownership
          membershipType
          weightCategory
          sortOfBoat
          note
          active
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateBoatSubscription>;

  OnDeleteBoatListener: Observable<OnDeleteBoatSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBoat {
        onDeleteBoat {
          __typename
          id
          name
          ownership
          membershipType
          weightCategory
          sortOfBoat
          note
          active
          training {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteBoatSubscription>;

  OnCreateTrainingListener: Observable<
    OnCreateTrainingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTraining {
        onCreateTraining {
          __typename
          id
          trainingDate
          statut
          athleteCategory
          trainingTime
          athleteAttending {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boatTraining {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateTrainingSubscription>;

  OnUpdateTrainingListener: Observable<
    OnUpdateTrainingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTraining {
        onUpdateTraining {
          __typename
          id
          trainingDate
          statut
          athleteCategory
          trainingTime
          athleteAttending {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boatTraining {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateTrainingSubscription>;

  OnDeleteTrainingListener: Observable<
    OnDeleteTrainingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTraining {
        onDeleteTraining {
          __typename
          id
          trainingDate
          statut
          athleteCategory
          trainingTime
          athleteAttending {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              attending
              createdAt
              updatedAt
            }
            nextToken
          }
          boatTraining {
            __typename
            items {
              __typename
              id
              trainingID
              athleteID
              boatID
              training {
                __typename
                id
                trainingDate
                statut
                athleteCategory
                trainingTime
                createdAt
                updatedAt
              }
              boat {
                __typename
                id
                name
                ownership
                membershipType
                weightCategory
                sortOfBoat
                note
                active
                createdAt
                updatedAt
              }
              athlete {
                __typename
                id
                firstName
                lastName
                membershipType
                email
                dob
                height
                weightCategory
                boatPreference
                side
                sex
                status
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteTrainingSubscription>;

  OnCreateAthleteAttendenceListener: Observable<
    OnCreateAthleteAttendenceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAthleteAttendence {
        onCreateAthleteAttendence {
          __typename
          id
          trainingID
          athleteID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attending
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateAthleteAttendenceSubscription>;

  OnUpdateAthleteAttendenceListener: Observable<
    OnUpdateAthleteAttendenceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAthleteAttendence {
        onUpdateAthleteAttendence {
          __typename
          id
          trainingID
          athleteID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attending
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateAthleteAttendenceSubscription>;

  OnDeleteAthleteAttendenceListener: Observable<
    OnDeleteAthleteAttendenceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAthleteAttendence {
        onDeleteAthleteAttendence {
          __typename
          id
          trainingID
          athleteID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attending
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteAthleteAttendenceSubscription>;

  OnCreateBoatListListener: Observable<
    OnCreateBoatListSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBoatList {
        onCreateBoatList {
          __typename
          id
          trainingID
          athleteID
          boatID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          boat {
            __typename
            id
            name
            ownership
            membershipType
            weightCategory
            sortOfBoat
            note
            active
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateBoatListSubscription>;

  OnUpdateBoatListListener: Observable<
    OnUpdateBoatListSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBoatList {
        onUpdateBoatList {
          __typename
          id
          trainingID
          athleteID
          boatID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          boat {
            __typename
            id
            name
            ownership
            membershipType
            weightCategory
            sortOfBoat
            note
            active
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateBoatListSubscription>;

  OnDeleteBoatListListener: Observable<
    OnDeleteBoatListSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBoatList {
        onDeleteBoatList {
          __typename
          id
          trainingID
          athleteID
          boatID
          training {
            __typename
            id
            trainingDate
            statut
            athleteCategory
            trainingTime
            athleteAttending {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boatTraining {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          boat {
            __typename
            id
            name
            ownership
            membershipType
            weightCategory
            sortOfBoat
            note
            active
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            height
            weightCategory
            boatPreference
            side
            sex
            status
            training {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                attending
                createdAt
                updatedAt
              }
              nextToken
            }
            boat {
              __typename
              items {
                __typename
                id
                trainingID
                athleteID
                boatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteBoatListSubscription>;
}
