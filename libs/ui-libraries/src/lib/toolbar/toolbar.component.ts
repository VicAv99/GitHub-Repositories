import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { Observable } from 'rxjs';

import { User } from '@gh/core-data';
import { UsersFacade } from '@gh/core-state';

@Component({
  selector: 'gh-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  title = 'GH Repositories';
  logo = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
  user$: Observable<User> = this.usersFacade.selectedUser$;

  @Input() links: any[];
  @Input() sidenav: MatSidenav;

  constructor(private usersFacade: UsersFacade) {}
}
