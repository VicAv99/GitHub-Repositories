import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { map } from 'rxjs/operators';

import { RepositoryInput, Repository } from './repository.model';
import { createRepositoryMutation, updateRepositoryMutation, repositoriesQuery } from './repositories.graphql';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  constructor(
    private apollo: Apollo,
    private userService: UserService
  ) { }

  all() {
    const login = this.userService.getUsername();
    return this.apollo.mutate({
      mutation: repositoriesQuery,
      variables: {
        login
      }
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.user.repositories.nodes),
      map((repositories: any[]) => repositories.map((repo) => ({...repo, languages: repo.languages.nodes[0]})))
    )
  }

  create(input: Partial<RepositoryInput>) {
    return this.apollo.mutate({
      mutation: createRepositoryMutation,
      variables: {
        input
      }
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.createRepository.repository)
    )
  }

  update(repository: Partial<Repository>) {
    return this.apollo.mutate({
      mutation: updateRepositoryMutation,
      variables: {
        input: repository
      }
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.updateRepository.repository)
    )
  }
}
