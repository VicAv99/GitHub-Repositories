import { Component, OnInit } from '@angular/core';

import { githubConfig } from '../../../../../.env';

@Component({
  selector: 'gh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginWithGitHub() {
    const { client_id, redirect_uri } = githubConfig;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user,public_repo,repo&redirect_uri=${redirect_uri}`;
  }

}
