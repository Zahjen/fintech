import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Question } from 'src/model/question';
import { formOverview } from 'src/variable/script/router-link';
Chart.register(...registerables);

@Component({
  selector: 'app-result-analysis',
  templateUrl: './result-analysis.component.html',
  styleUrls: ['./result-analysis.component.scss']
})
export class ResultAnalysisComponent implements OnInit {

  formOverview = formOverview;
  pointsByCategory : number[] = [];

  constructor(private sharedFormData: SharedFormDataService) { }

  ngOnInit(): void {
    this.pointsByCategory = this.sharedFormData.getPointsByQuestionCategorie()

    const myChart = new Chart("chart", {
      type: 'radar',
      data: {
          labels: ['Operating Environment', 'Regulatory Environment', 'Reputational Environment', 'Sectorial Environment', 'Miscellaneous'],
          datasets: [{
              label: 'Questions repartition',
              data: this.ratio(this.pointsByCategory),
              backgroundColor: [
                  'rgba(102, 102, 102, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                  'rgba(102, 102, 102, 0.8)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
          }]
      },
    });
  }

  ratio(pointsByCategory: number[]) {
    pointsByCategory[0] = pointsByCategory[0]*10/42;
    pointsByCategory[1] = pointsByCategory[1]*10/2;
    pointsByCategory[2] = pointsByCategory[5]*10/3;
    pointsByCategory[3] = pointsByCategory[3]*10/4;
    pointsByCategory[4] = pointsByCategory[4]*10;

    return pointsByCategory;
  }

}
