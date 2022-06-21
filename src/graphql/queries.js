import { gql } from '@apollo/client';
import { REPOSITORY_OVERVIEW } from './fragments'

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_OVERVIEW}
  query getRepositories {
    repositories {
      edges {
        node {
          ...RepositoryOverviewFields
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${REPOSITORY_OVERVIEW}
  query getRepository ($id: ID!) {
    repository(id: $id) {
      ...RepositoryOverviewFields
      url
      reviews {
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
