import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/model/form';
import { FormDetail } from 'src/model/form-detail';
import { Chart, registerables } from 'chart.js';
import { Category } from 'src/model/category';
Chart.register(...registerables);

@Component({
  selector: 'app-form-detail-chart',
  templateUrl: './form-detail-chart.component.html',
  styleUrls: ['./form-detail-chart.component.scss']
})
export class FormDetailChartComponent implements OnInit {

  @Input() formDetails!: FormDetail[];
  @Input() form!: Form;
  @Input() categories!: Category[];

  constructor() { }

  ngOnInit(): void {

  }

}
