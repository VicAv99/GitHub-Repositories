import gql from 'graphql-tag';

const repositoryFragment = gql`
  fragment repositoryFragment on Repository {
    id
    name
    description
    homepageUrl
    url
    forkCount
    isPrivate
    isFork
    languages(first: 1) {
      nodes {
        name
        color
        id
      }
    }
    createdAt
    updatedAt
    pushedAt
  }
`;

export const repositoriesQuery = gql`
  query repositoriesQuery($login: String!) {
    user(login: $login) {
      repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          ...repositoryFragment
        }
      }
    }
  }
  ${repositoryFragment}
`;

export const createRepositoryMutation = gql`
  mutation createRepositoryMutation($input: CreateRepositoryInput!) {
    createRepository(input: $input) {
      repository {
        ...repositoryFragment
      }
    }
  }
  ${repositoryFragment}
`;
// {repositoryId: "", name: "", homepageUrl: "", description: ""}
export const updateRepositoryMutation = gql`
  mutation updateRepositoryMutation($input: UpdateRepositoryInput!) {
    updateRepository(input: $input) {
      repository {
        ...repositoryFragment
      }
    }
  }
  ${repositoryFragment}
`;
