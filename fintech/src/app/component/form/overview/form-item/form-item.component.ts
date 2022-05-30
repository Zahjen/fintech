import { Component, Input, OnInit } from '@angular/core';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Form } from 'src/model/form';
import { formDetailItem } from 'src/variable/script/router-link';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  @Input() form!: Form

  formDetailItem = formDetailItem

  constructor(
    private sharedFormDataService: SharedFormDataService
  ) { }

  ngOnInit() : void {
  }

  inherentRisk(point: number) : string {
    let risk: string = "";

    if (0 <= point && point <= 10) {
      risk = "Low";
    } else if (11 <= point && point <= 18) {
      risk = "Medium";
    } else if (19 <= point && point <= 24) {
      risk = "High";
    } else if (point > 24) {
      risk = "Critical";
    } else {
      risk = "error"
    }

    return risk;
  }

  sendForm() {
    this.sharedFormDataService.setForm(this.form)
  }

}
