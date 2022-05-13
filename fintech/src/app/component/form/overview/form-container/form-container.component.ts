import { Component, OnInit } from '@angular/core';
import { tab } from 'src/variable/script/nav-bar-data';
import { addFormRoute } from 'src/variable/script/router-link';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent {

  addFormRoute = addFormRoute;
  tab = tab;

}
