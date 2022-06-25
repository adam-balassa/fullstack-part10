import { gql } from '@apollo/client';
import { REPOSITORY_OVERVIEW } from './fragments'

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_OVERVIEW}
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection,
    $filter: String,
    $after: String
  ) {
    repositories(
      first: 10,
      after: $after,
      orderBy: $orderBy, 
      orderDirection: $orderDirection, 
      searchKeyword: $filter) {
      edges {
        node {
          ...RepositoryOverviewFields
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${REPOSITORY_OVERVIEW}
  query getRepository ($id: ID!, $after: String) {
    repository(id: $id) {
      ...RepositoryOverviewFields
      url
      reviews(first: 8, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const GET_ME = gql`
  query getMe {
    me {
      id
      username
    }
  }
`;
