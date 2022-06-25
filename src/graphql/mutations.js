import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation Authenticate($userName: String!, $password: String!) {
    authenticate(credentials: {
      username: $userName,
      password: $password
    }) {
      accessToken
    }
  }`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      repositoryId
    }
  }`;


export const SIGN_UP = gql`
  mutation signUp($userName: String!, $password: String!) {
    createUser(user: {
      username: $userName,
      password: $password
    }) {
      id
    }
  }`;