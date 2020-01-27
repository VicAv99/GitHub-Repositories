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
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${githubConfig.client_id}&scope=user,public_repo,repo&redirect_uri=${window.location.href}/callback`;
  }

}
