import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/model/form';

@Component({
  selector: 'app-form-container-item',
  templateUrl: './form-container-item.component.html',
  styleUrls: ['./form-container-item.component.scss']
})
export class FormContainerItemComponent implements OnInit {

  @Input() forms!: Form[];

  page = 1;
  count = 0;
  pageSize = 5;

  constructor() { }

  ngOnInit() : void {
  }

  handlePageChange(event: any): void {
    this.page = event;
  }

}
