import { Component } from '@angular/core';

import { UsersFacade } from '@gh/core-state';

@Component({
  selector: 'gh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    {path: 'about', label: 'About', icon: 'loyalty'},
    {path: '', label: 'Repositories', icon: 'loyalty'},
  ];
  constructor(private usersFacade: UsersFacade) {
    usersFacade.loadUser();
  }
}
