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
  weight?: string | null;
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
  weight?: ModelStringInput | null;
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
  weight?: string | null;
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

export type CreateAttendenceInput = {
  id?: string | null;
  trainingDay: string;
  status?: string | null;
};

export type ModelAttendenceConditionInput = {
  trainingDay?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelAttendenceConditionInput | null> | null;
  or?: Array<ModelAttendenceConditionInput | null> | null;
  not?: ModelAttendenceConditionInput | null;
};

export type UpdateAttendenceInput = {
  id: string;
  trainingDay?: string | null;
  status?: string | null;
};

export type DeleteAttendenceInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  membershipType?: ModelStringInput | null;
  email?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  weight?: ModelStringInput | null;
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

export type ModelAttendenceFilterInput = {
  id?: ModelIDInput | null;
  trainingDay?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelAttendenceFilterInput | null> | null;
  or?: Array<ModelAttendenceFilterInput | null> | null;
  not?: ModelAttendenceFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  weight: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  weight: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  weight: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
};

export type CreateAttendenceMutation = {
  __typename: "Attendence";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    weight: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
  };
  status: string | null;
};

export type UpdateAttendenceMutation = {
  __typename: "Attendence";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    weight: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
  };
  status: string | null;
};

export type DeleteAttendenceMutation = {
  __typename: "Attendence";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    weight: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
  };
  status: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  weight: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
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
    weight: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetAttendenceQuery = {
  __typename: "Attendence";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    weight: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
  };
  status: string | null;
};

export type ListAttendencesQuery = {
  __typename: "ModelAttendenceConnection";
  items: Array<{
    __typename: "Attendence";
    id: string;
    trainingDay: string;
    athlete: {
      __typename: "User";
      id: string;
      firstName: string;
      lastName: string;
      membershipType: string;
      email: string;
      dob: string | null;
      weight: string | null;
      height: string | null;
      weightCategory: string | null;
      boatPreference: string | null;
      side: string | null;
      sex: string | null;
      status: boolean | null;
    };
    status: string | null;
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
  weight: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  weight: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  membershipType: string;
  email: string;
  dob: string | null;
  weight: string | null;
  height: string | null;
  weightCategory: string | null;
  boatPreference: string | null;
  side: string | null;
  sex: string | null;
  status: boolean | null;
};

export type OnCreateAttendenceSubscription = {
  __typename: "Attendence";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    weight: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
  };
  status: string | null;
};

export type OnUpdateAttendenceSubscription = {
  __typename: "Attendence";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    weight: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
  };
  status: string | null;
};

export type OnDeleteAttendenceSubscription = {
  __typename: "Attendence";
  id: string;
  trainingDay: string;
  athlete: {
    __typename: "User";
    id: string;
    firstName: string;
    lastName: string;
    membershipType: string;
    email: string;
    dob: string | null;
    weight: string | null;
    height: string | null;
    weightCategory: string | null;
    boatPreference: string | null;
    side: string | null;
    sex: string | null;
    status: boolean | null;
  };
  status: string | null;
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
          weight
          height
          weightCategory
          boatPreference
          side
          sex
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
          weight
          height
          weightCategory
          boatPreference
          side
          sex
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
          weight
          height
          weightCategory
          boatPreference
          side
          sex
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
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateAttendence(
    input: CreateAttendenceInput,
    condition?: ModelAttendenceConditionInput
  ): Promise<CreateAttendenceMutation> {
    const statement = `mutation CreateAttendence($input: CreateAttendenceInput!, $condition: ModelAttendenceConditionInput) {
        createAttendence(input: $input, condition: $condition) {
          __typename
          id
          trainingDay
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            weight
            height
            weightCategory
            boatPreference
            side
            sex
            status
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
    return <CreateAttendenceMutation>response.data.createAttendence;
  }
  async UpdateAttendence(
    input: UpdateAttendenceInput,
    condition?: ModelAttendenceConditionInput
  ): Promise<UpdateAttendenceMutation> {
    const statement = `mutation UpdateAttendence($input: UpdateAttendenceInput!, $condition: ModelAttendenceConditionInput) {
        updateAttendence(input: $input, condition: $condition) {
          __typename
          id
          trainingDay
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            weight
            height
            weightCategory
            boatPreference
            side
            sex
            status
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
    return <UpdateAttendenceMutation>response.data.updateAttendence;
  }
  async DeleteAttendence(
    input: DeleteAttendenceInput,
    condition?: ModelAttendenceConditionInput
  ): Promise<DeleteAttendenceMutation> {
    const statement = `mutation DeleteAttendence($input: DeleteAttendenceInput!, $condition: ModelAttendenceConditionInput) {
        deleteAttendence(input: $input, condition: $condition) {
          __typename
          id
          trainingDay
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            weight
            height
            weightCategory
            boatPreference
            side
            sex
            status
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
    return <DeleteAttendenceMutation>response.data.deleteAttendence;
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
          weight
          height
          weightCategory
          boatPreference
          side
          sex
          status
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
            weight
            height
            weightCategory
            boatPreference
            side
            sex
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
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetAttendence(id: string): Promise<GetAttendenceQuery> {
    const statement = `query GetAttendence($id: ID!) {
        getAttendence(id: $id) {
          __typename
          id
          trainingDay
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            weight
            height
            weightCategory
            boatPreference
            side
            sex
            status
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
    return <GetAttendenceQuery>response.data.getAttendence;
  }
  async ListAttendences(
    filter?: ModelAttendenceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAttendencesQuery> {
    const statement = `query ListAttendences($filter: ModelAttendenceFilterInput, $limit: Int, $nextToken: String) {
        listAttendences(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            trainingDay
            athlete {
              __typename
              id
              firstName
              lastName
              membershipType
              email
              dob
              weight
              height
              weightCategory
              boatPreference
              side
              sex
              status
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
    return <ListAttendencesQuery>response.data.listAttendences;
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
          weight
          height
          weightCategory
          boatPreference
          side
          sex
          status
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
          weight
          height
          weightCategory
          boatPreference
          side
          sex
          status
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
          weight
          height
          weightCategory
          boatPreference
          side
          sex
          status
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateAttendenceListener: Observable<
    OnCreateAttendenceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAttendence {
        onCreateAttendence {
          __typename
          id
          trainingDay
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            weight
            height
            weightCategory
            boatPreference
            side
            sex
            status
          }
          status
        }
      }`
    )
  ) as Observable<OnCreateAttendenceSubscription>;

  OnUpdateAttendenceListener: Observable<
    OnUpdateAttendenceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAttendence {
        onUpdateAttendence {
          __typename
          id
          trainingDay
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            weight
            height
            weightCategory
            boatPreference
            side
            sex
            status
          }
          status
        }
      }`
    )
  ) as Observable<OnUpdateAttendenceSubscription>;

  OnDeleteAttendenceListener: Observable<
    OnDeleteAttendenceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAttendence {
        onDeleteAttendence {
          __typename
          id
          trainingDay
          athlete {
            __typename
            id
            firstName
            lastName
            membershipType
            email
            dob
            weight
            height
            weightCategory
            boatPreference
            side
            sex
            status
          }
          status
        }
      }`
    )
  ) as Observable<OnDeleteAttendenceSubscription>;
}
