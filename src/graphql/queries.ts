/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMortar = /* GraphQL */ `
  query GetMortar($id: ID!) {
    getMortar(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listMortars = /* GraphQL */ `
  query ListMortars(
    $filter: ModelMortarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMortars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
