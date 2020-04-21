/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

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

export type CreateAttendenceAthleteInput = {
  id?: string | null;
  trainingDay: string;
  status?: boolean | null;
};

export type ModelAttendenceAthleteConditionInput = {
  trainingDay?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  and?: Array<ModelAttendenceAthleteConditionInput | null> | null;
  or?: Array<ModelAttendenceAthleteConditionInput | null> | null;
  not?: ModelAttendenceAthleteConditionInput | null;
};

export type UpdateAttendenceAthleteInput = {
  id: string;
  trainingDay?: string | null;
  status?: boolean | null;
};

export type DeleteAttendenceAthleteInput = {
  id?: string | null;
};

export type CreateTrainingInput = {
  id?: string | null;
  attendenceID: string;
  athleteID: string;
};

export type ModelTrainingConditionInput = {
  attendenceID?: ModelIDInput | null;
  athleteID?: ModelIDInput | null;
  and?: Array<ModelTrainingConditionInput | null> | null;
  or?: Array<ModelTrainingConditionInput | null> | null;
  not?: ModelTrainingConditionInput | null;
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

export type UpdateTrainingInput = {
  id: string;
  attendenceID?: string | null;
  athleteID?: string | null;
};

export type DeleteTrainingInput = {
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

export type ModelAttendenceAthleteFilterInput = {
  id?: ModelIDInput | null;
  trainingDay?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  and?: Array<ModelAttendenceAthleteFilterInput | null> | null;
  or?: Array<ModelAttendenceAthleteFilterInput | null> | null;
  not?: ModelAttendenceAthleteFilterInput | null;
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
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
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
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
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
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateAttendenceAthleteMutation = {
  __typename: "AttendenceAthlete";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: boolean | null;
};

export type UpdateAttendenceAthleteMutation = {
  __typename: "AttendenceAthlete";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: boolean | null;
};

export type DeleteAttendenceAthleteMutation = {
  __typename: "AttendenceAthlete";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: boolean | null;
};

export type CreateTrainingMutation = {
  __typename: "Training";
  id: string;
  attendenceID: string;
  athleteID: string;
  attendence: {
    __typename: "AttendenceAthlete";
    id: string;
    trainingDay: string;
    athlete: {
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
    status: boolean | null;
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
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
  };
};

export type UpdateTrainingMutation = {
  __typename: "Training";
  id: string;
  attendenceID: string;
  athleteID: string;
  attendence: {
    __typename: "AttendenceAthlete";
    id: string;
    trainingDay: string;
    athlete: {
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
    status: boolean | null;
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
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
  };
};

export type DeleteTrainingMutation = {
  __typename: "Training";
  id: string;
  attendenceID: string;
  athleteID: string;
  attendence: {
    __typename: "AttendenceAthlete";
    id: string;
    trainingDay: string;
    athlete: {
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
    status: boolean | null;
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
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
  };
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
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
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
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetAttendenceAthleteQuery = {
  __typename: "AttendenceAthlete";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: boolean | null;
};

export type ListAttendenceAthletesQuery = {
  __typename: "ModelAttendenceAthleteConnection";
  items: Array<{
    __typename: "AttendenceAthlete";
    id: string;
    trainingDay: string;
    athlete: {
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
    status: boolean | null;
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
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
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
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
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
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateAttendenceAthleteSubscription = {
  __typename: "AttendenceAthlete";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: boolean | null;
};

export type OnUpdateAttendenceAthleteSubscription = {
  __typename: "AttendenceAthlete";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: boolean | null;
};

export type OnDeleteAttendenceAthleteSubscription = {
  __typename: "AttendenceAthlete";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "ModelTrainingConnection";
    items: Array<{
      __typename: "Training";
      id: string;
      attendenceID: string;
      athleteID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: boolean | null;
};

export type OnCreateTrainingSubscription = {
  __typename: "Training";
  id: string;
  attendenceID: string;
  athleteID: string;
  attendence: {
    __typename: "AttendenceAthlete";
    id: string;
    trainingDay: string;
    athlete: {
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
    status: boolean | null;
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
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnUpdateTrainingSubscription = {
  __typename: "Training";
  id: string;
  attendenceID: string;
  athleteID: string;
  attendence: {
    __typename: "AttendenceAthlete";
    id: string;
    trainingDay: string;
    athlete: {
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
    status: boolean | null;
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
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnDeleteTrainingSubscription = {
  __typename: "Training";
  id: string;
  attendenceID: string;
  athleteID: string;
  attendence: {
    __typename: "AttendenceAthlete";
    id: string;
    trainingDay: string;
    athlete: {
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
    status: boolean | null;
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
      __typename: "ModelTrainingConnection";
      nextToken: string | null;
    } | null;
  };
};

@Injectable({
  providedIn: "root"
})
export class APIService {
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
              attendenceID
              athleteID
            }
            nextToken
          }
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
              attendenceID
              athleteID
            }
            nextToken
          }
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
              attendenceID
              athleteID
            }
            nextToken
          }
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
  async CreateAttendenceAthlete(
    input: CreateAttendenceAthleteInput,
    condition?: ModelAttendenceAthleteConditionInput
  ): Promise<CreateAttendenceAthleteMutation> {
    const statement = `mutation CreateAttendenceAthlete($input: CreateAttendenceAthleteInput!, $condition: ModelAttendenceAthleteConditionInput) {
        createAttendenceAthlete(input: $input, condition: $condition) {
          __typename
          id
          trainingDay
          athlete {
            __typename
            items {
              __typename
              id
              attendenceID
              athleteID
            }
            nextToken
          }
          status
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
    return <CreateAttendenceAthleteMutation>(
      response.data.createAttendenceAthlete
    );
  }
  async UpdateAttendenceAthlete(
    input: UpdateAttendenceAthleteInput,
    condition?: ModelAttendenceAthleteConditionInput
  ): Promise<UpdateAttendenceAthleteMutation> {
    const statement = `mutation UpdateAttendenceAthlete($input: UpdateAttendenceAthleteInput!, $condition: ModelAttendenceAthleteConditionInput) {
        updateAttendenceAthlete(input: $input, condition: $condition) {
          __typename
          id
          trainingDay
          athlete {
            __typename
            items {
              __typename
              id
              attendenceID
              athleteID
            }
            nextToken
          }
          status
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
    return <UpdateAttendenceAthleteMutation>(
      response.data.updateAttendenceAthlete
    );
  }
  async DeleteAttendenceAthlete(
    input: DeleteAttendenceAthleteInput,
    condition?: ModelAttendenceAthleteConditionInput
  ): Promise<DeleteAttendenceAthleteMutation> {
    const statement = `mutation DeleteAttendenceAthlete($input: DeleteAttendenceAthleteInput!, $condition: ModelAttendenceAthleteConditionInput) {
        deleteAttendenceAthlete(input: $input, condition: $condition) {
          __typename
          id
          trainingDay
          athlete {
            __typename
            items {
              __typename
              id
              attendenceID
              athleteID
            }
            nextToken
          }
          status
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
    return <DeleteAttendenceAthleteMutation>(
      response.data.deleteAttendenceAthlete
    );
  }
  async CreateTraining(
    input: CreateTrainingInput,
    condition?: ModelTrainingConditionInput
  ): Promise<CreateTrainingMutation> {
    const statement = `mutation CreateTraining($input: CreateTrainingInput!, $condition: ModelTrainingConditionInput) {
        createTraining(input: $input, condition: $condition) {
          __typename
          id
          attendenceID
          athleteID
          attendence {
            __typename
            id
            trainingDay
            athlete {
              __typename
              nextToken
            }
            status
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
          }
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
          attendenceID
          athleteID
          attendence {
            __typename
            id
            trainingDay
            athlete {
              __typename
              nextToken
            }
            status
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
          }
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
          attendenceID
          athleteID
          attendence {
            __typename
            id
            trainingDay
            athlete {
              __typename
              nextToken
            }
            status
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
          }
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
              attendenceID
              athleteID
            }
            nextToken
          }
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
  async GetAttendenceAthlete(id: string): Promise<GetAttendenceAthleteQuery> {
    const statement = `query GetAttendenceAthlete($id: ID!) {
        getAttendenceAthlete(id: $id) {
          __typename
          id
          trainingDay
          athlete {
            __typename
            items {
              __typename
              id
              attendenceID
              athleteID
            }
            nextToken
          }
          status
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAttendenceAthleteQuery>response.data.getAttendenceAthlete;
  }
  async ListAttendenceAthletes(
    filter?: ModelAttendenceAthleteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAttendenceAthletesQuery> {
    const statement = `query ListAttendenceAthletes($filter: ModelAttendenceAthleteFilterInput, $limit: Int, $nextToken: String) {
        listAttendenceAthletes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            trainingDay
            athlete {
              __typename
              nextToken
            }
            status
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
    return <ListAttendenceAthletesQuery>response.data.listAttendenceAthletes;
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
              attendenceID
              athleteID
            }
            nextToken
          }
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
              attendenceID
              athleteID
            }
            nextToken
          }
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
              attendenceID
              athleteID
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateAttendenceAthleteListener: Observable<
    OnCreateAttendenceAthleteSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAttendenceAthlete {
        onCreateAttendenceAthlete {
          __typename
          id
          trainingDay
          athlete {
            __typename
            items {
              __typename
              id
              attendenceID
              athleteID
            }
            nextToken
          }
          status
        }
      }`
    )
  ) as Observable<OnCreateAttendenceAthleteSubscription>;

  OnUpdateAttendenceAthleteListener: Observable<
    OnUpdateAttendenceAthleteSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAttendenceAthlete {
        onUpdateAttendenceAthlete {
          __typename
          id
          trainingDay
          athlete {
            __typename
            items {
              __typename
              id
              attendenceID
              athleteID
            }
            nextToken
          }
          status
        }
      }`
    )
  ) as Observable<OnUpdateAttendenceAthleteSubscription>;

  OnDeleteAttendenceAthleteListener: Observable<
    OnDeleteAttendenceAthleteSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAttendenceAthlete {
        onDeleteAttendenceAthlete {
          __typename
          id
          trainingDay
          athlete {
            __typename
            items {
              __typename
              id
              attendenceID
              athleteID
            }
            nextToken
          }
          status
        }
      }`
    )
  ) as Observable<OnDeleteAttendenceAthleteSubscription>;

  OnCreateTrainingListener: Observable<
    OnCreateTrainingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTraining {
        onCreateTraining {
          __typename
          id
          attendenceID
          athleteID
          attendence {
            __typename
            id
            trainingDay
            athlete {
              __typename
              nextToken
            }
            status
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
          }
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
          attendenceID
          athleteID
          attendence {
            __typename
            id
            trainingDay
            athlete {
              __typename
              nextToken
            }
            status
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
          }
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
          attendenceID
          athleteID
          attendence {
            __typename
            id
            trainingDay
            athlete {
              __typename
              nextToken
            }
            status
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
          }
        }
      }`
    )
  ) as Observable<OnDeleteTrainingSubscription>;
}
