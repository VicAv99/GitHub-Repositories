import { Component, OnInit } from '@angular/core';

import { Visibility } from '@gh/core-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepositoriesFacade } from '@gh/core-state';

@Component({
  selector: 'gh-repositories-create',
  templateUrl: './repositories-create.component.html',
  styleUrls: ['./repositories-create.component.scss']
})
export class RepositoriesCreateComponent implements OnInit {
  form: FormGroup;
  repoTypes = [
    {type: Visibility.PRIVATE, desc: 'You choose who can see and commit to this repository.'},
    {type: Visibility.PUBLIC, desc: 'Anyone can see this repository. You choose who can commit.'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private repositoriesFacade: RepositoriesFacade
  ) { }

  ngOnInit() {
    this.initForm();
  }

  create() {
    this.repositoriesFacade.createRepository(this.form.value);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: [],
      visibility: [Visibility.PUBLIC, Validators.compose([Validators.required])],
      hasIssuesEnabled: [true]
    });
  }

}
