import { Component } from '@angular/core';

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
}
