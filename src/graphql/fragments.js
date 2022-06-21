import { gql } from '@apollo/client';

export const REPOSITORY_OVERVIEW = gql`
  fragment RepositoryOverviewFields on Repository {
    id
    fullName
    forksCount
    stargazersCount
    reviewCount
    ratingAverage
    ownerAvatarUrl
    language
    description
  }
`;