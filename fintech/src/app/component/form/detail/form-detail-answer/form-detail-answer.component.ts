import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/model/form';
import { FormDetail } from 'src/model/form-detail';

@Component({
  selector: 'app-form-detail-answer',
  templateUrl: './form-detail-answer.component.html',
  styleUrls: ['./form-detail-answer.component.scss']
})
export class FormDetailAnswerComponent implements OnInit {

  @Input() formDetails!: FormDetail[];
  @Input() form!: Form;

  constructor() { }

  ngOnInit(): void {
  }

}
