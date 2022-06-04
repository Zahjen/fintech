import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Category } from 'src/model/category';
import { Question } from 'src/model/question';
import { ThirdParty } from 'src/model/third-party';
import { Utils } from 'src/tools/utils';

@Component({
  selector: 'app-result-analysis-content',
  templateUrl: './result-analysis-content.component.html',
  styleUrls: ['./result-analysis-content.component.scss']
})
export class ResultAnalysisContentComponent implements OnInit {

  @Input() categories!: Category[];

  utils = Utils.getInstance();

  questions!: Question<any>[];
  chosenThirdParty!: ThirdParty;
  categoriesLabel: string[] = [];
  categoriesPoint: number[] = [];

  constructor(private sharedFormData: SharedFormDataService) { }

  ngOnInit(): void {
    this.initQuestions();
    this.initFillingPointCategories();
    this.initCategoriesLabelAndPoint();

    const myChart = new Chart("chart", {
      type: 'radar',
      data: {
          labels: this.categoriesLabel,
          datasets: [{
              label: 'Questions repartition',
              data: this.utils.ratio(this.categories),
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

  private initQuestions() : void {
    this.questions = this.sharedFormData.getQuestions();
  }

  private initFillingPointCategories() : void {
    this.utils.fillCategories(this.questions, this.categories);
  }

  private initCategoriesLabelAndPoint() : void {
    this.categories.forEach((category: Category) => {
      this.categoriesLabel.push(category.label);
      this.categoriesPoint.push(category.point);
    })
  }

}
