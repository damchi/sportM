/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateTrainingInput = {
  id?: string | null;
  trainingDay: string;
  statut?: boolean | null;
  athleteCategory?: string | null;
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

export type CreateAthleteAttendenceInput = {
  id?: string | null;
  trainingID: string;
  athleteID: string;
  attending?: boolean | null;
};

export type ModelAthleteAttendenceConditionInput = {
  trainingID?: ModelIDInput | null;
  athleteID?: ModelIDInput | null;
  attending?: ModelBooleanInput | null;
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
  attending?: boolean | null;
};

export type DeleteAthleteAttendenceInput = {
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

export type BatchAddTrainingMutation = {
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
      attending: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: boolean | null;
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
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: boolean | null;
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
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: boolean | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      attending: boolean | null;
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
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: boolean | null;
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
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: boolean | null;
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
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  attending: boolean | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async BatchAddTraining(
    training?: Array<CreateTrainingInput | null>
  ): Promise<Array<BatchAddTrainingMutation>> {
    const statement = `mutation BatchAddTraining($training: [CreateTrainingInput]) {
        batchAddTraining(training: $training) {
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (training) {
      gqlAPIServiceArguments.training = training;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<BatchAddTrainingMutation>>response.data.batchAddTraining;
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
              attending
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
              attending
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
              attending
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
              attending
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
              attending
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
              attending
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
              attending
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
              attending
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
              attending
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
              attending
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
              attending
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
              attending
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
              attending
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
              attending
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
}
