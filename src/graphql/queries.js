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

export const GET_ME = gql`
  query getMe {
    me {
      id
      username
    }
  }
`;
