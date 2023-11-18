/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMortarInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelMortarConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelMortarConditionInput | null> | null;
  or?: Array<ModelMortarConditionInput | null> | null;
  not?: ModelMortarConditionInput | null;
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
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
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

export type Mortar = {
  __typename: 'Mortar';
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMortarInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteMortarInput = {
  id: string;
};

export type ModelMortarFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelMortarFilterInput | null> | null;
  or?: Array<ModelMortarFilterInput | null> | null;
  not?: ModelMortarFilterInput | null;
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

export type ModelMortarConnection = {
  __typename: 'ModelMortarConnection';
  items: Array<Mortar | null>;
  nextToken?: string | null;
};

export type CreateMortarMutationVariables = {
  input: CreateMortarInput;
  condition?: ModelMortarConditionInput | null;
};

export type CreateMortarMutation = {
  createMortar?: {
    __typename: 'Mortar';
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateMortarMutationVariables = {
  input: UpdateMortarInput;
  condition?: ModelMortarConditionInput | null;
};

export type UpdateMortarMutation = {
  updateMortar?: {
    __typename: 'Mortar';
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteMortarMutationVariables = {
  input: DeleteMortarInput;
  condition?: ModelMortarConditionInput | null;
};

export type DeleteMortarMutation = {
  deleteMortar?: {
    __typename: 'Mortar';
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetMortarQueryVariables = {
  id: string;
};

export type GetMortarQuery = {
  getMortar?: {
    __typename: 'Mortar';
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListMortarsQueryVariables = {
  filter?: ModelMortarFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMortarsQuery = {
  listMortars?: {
    __typename: 'ModelMortarConnection';
    items: Array<{
      __typename: 'Mortar';
      id: string;
      name: string;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateMortarSubscription = {
  onCreateMortar?: {
    __typename: 'Mortar';
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateMortarSubscription = {
  onUpdateMortar?: {
    __typename: 'Mortar';
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteMortarSubscription = {
  onDeleteMortar?: {
    __typename: 'Mortar';
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};
