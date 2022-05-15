import { Component, OnInit } from '@angular/core';
import { finishedFormInfo } from 'src/variable/script/finished-form-info';

@Component({
  selector: 'app-form-container-item',
  templateUrl: './form-container-item.component.html',
  styleUrls: ['./form-container-item.component.scss']
})
export class FormContainerItemComponent implements OnInit {

  finishedFormInfo = finishedFormInfo;

  constructor() { }

  ngOnInit() : void {
  }

}
