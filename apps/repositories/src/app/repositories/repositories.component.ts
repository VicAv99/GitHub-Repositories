import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs';

import { Repository } from '@gh/core-data';
import { RepositoriesFacade, UsersFacade } from '@gh/core-state';

@Component({
  selector: 'gh-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RepositoriesComponent implements OnInit {
  repositories$: Observable<Repository[]> = this.repositoriesFacade.allRepositories$;

  constructor(
    private usersFacade: UsersFacade,
    private repositoriesFacade: RepositoriesFacade,
  ) { }

  ngOnInit() {
    this.usersFacade.loadUser();
    this.repositoriesFacade.loadRepositories();
  }

}
