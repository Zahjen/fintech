import { Component } from '@angular/core';
import { tab } from 'src/variable/script/nav-bar-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fintech';
  tab = tab;
}
