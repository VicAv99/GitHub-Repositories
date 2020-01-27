import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { Repository, NotifyService } from '@gh/core-data';
import { RepositoriesFacade } from '@gh/core-state';

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

  private initForm() {
    this.form = this.formBuilder.group({
      repositoryId: null,
      name: ['', Validators.compose([Validators.required])],
      description: [''],
      homepageUrl: ['']
    });
  }

}
