import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/model/form';

@Component({
  selector: 'app-dashboard-latest-form',
  templateUrl: './dashboard-latest-form.component.html',
  styleUrls: ['./dashboard-latest-form.component.scss']
})
export class DashboardLatestFormComponent implements OnInit {

  @Input() forms!: Form[];

  constructor() { }

  ngOnInit(): void {
  }

}
