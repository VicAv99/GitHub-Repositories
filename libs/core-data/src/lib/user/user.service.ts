import { getUsernameQuery, usersQuery } from './user.graphql';
import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';

import { User } from './user.model';
import { switchMap, map } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apollo: Apollo) {}

  user(): Observable<User> {
    return this.apollo.query({
      query: getUsernameQuery,
      fetchPolicy: 'network-only'
    }).pipe(
      map((res: ApolloQueryResult<any>) => res.data.viewer.login),
      switchMap((login: string) => this.apollo.query({
          query: usersQuery,
          fetchPolicy: 'network-only',
          variables: {
            login
          }
        }).pipe(map((res: ApolloQueryResult<any>) => res.data.user))
      )
    );
  }
}
