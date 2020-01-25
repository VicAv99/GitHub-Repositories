import { Component, Input } from '@angular/core';

import { MatSidenav } from '@angular/material';

@Component({
  selector: 'gh-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  title = 'GH Repositories';
  logo = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
  @Input() links: any[];
  @Input() sidenav: MatSidenav;
}
