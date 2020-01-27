import { Component, Input } from '@angular/core';

import { Repository } from '@gh/core-data';

@Component({
  selector: 'gh-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss']
})
export class RepositoriesListComponent {
  @Input() repositories: Repository[];
}
