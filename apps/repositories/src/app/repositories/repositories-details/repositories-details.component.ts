import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonToggleGroup } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { RepositoriesFacade } from '@gh/core-state';
import { Repository, NotifyService, UserService } from '@gh/core-data';

@Component({
  selector: 'gh-repositories-details',
  templateUrl: './repositories-details.component.html',
  styleUrls: ['./repositories-details.component.scss']
})
export class RepositoriesDetailsComponent implements OnInit {
  form: FormGroup;
  repository$: Observable<Repository> = this.repositoriesFacade.selectedRepository$.pipe(
    filter((repository: Repository) => !!repository && !!repository.id),
    tap((repository: Repository) => this.form.patchValue({...repository, repositoryId: repository.id}))
  );

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private notifyService: NotifyService,
    private repositoriesFacade: RepositoriesFacade
  ) { }

  ngOnInit() {
    const repositoryId = this.route.snapshot.params && this.route.snapshot.params.id;
    this.repositoriesFacade.loadRepositories();
    this.repositoriesFacade.selectRepository(repositoryId);
    this.initForm();
  }

  update() {
    this.repositoriesFacade.updateRepository(this.form.value);
    this.notifyService.notify(`Successfully Updated: ${this.form.get('name').value}`);
  }

  copied() {
    this.notifyService.notify(`Elijah said you copied successfully!`);
  }

  createCloneLink(toggleGroup: MatButtonToggleGroup) {
    const username = this.userService.getUsername();
    const repoName = this.form.get('name').value;
    return toggleGroup.value === 'SSH' ?
      `git@github.com:${username}/${repoName}.git` :
      `https://github.com/${username}/${repoName}.git`;
  }

  private initForm() {
    this.form = this.formBuilder.group({
      repositoryId: null,
      name: ['', Validators.compose([Validators.required])],
      description: [''],
      homepageUrl: ['']
    });
  }

}
