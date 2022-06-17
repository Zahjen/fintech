import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/model/form';
import { FormDetail } from 'src/model/form-detail';
import { Chart, registerables } from 'chart.js';
import { Category } from 'src/model/category';
import { Utils } from 'src/tools/utils';
import { Question } from 'src/model/question';
import { ThirdParty } from 'src/model/third-party';
import { Answer } from 'src/model/answer';
import { IObtainedPoint } from 'src/app/interfaces/object-from-api/obtained-point';
import { formDetailAnswer } from 'src/variable/script/router-link';
import { radar, radarBorder } from 'src/variable/script/color';
Chart.register(...registerables);

@Component({
  selector: 'app-form-detail-chart',
  templateUrl: './form-detail-chart.component.html',
  styleUrls: ['./form-detail-chart.component.scss']
})
export class FormDetailChartComponent implements OnInit {

  @Input() formDetails!: FormDetail[];
  @Input() form!: Form;

  radarColor = radar;
  radarBorder = radarBorder;

  formDetailAnswer = formDetailAnswer;

  utils = Utils.getInstance();

  chosenThirdParty!: ThirdParty;

  questions: Question<any>[] = [];
  categories: Category[] = [];
  categoriesLabel: string[] = [];
  categoriesPoint: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initQuestions();
    this.initCategories();
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
                  this.radarColor.operating,
                  this.radarColor.regulatory,
                  this.radarColor.reputational,
                  this.radarColor.sectorial,
                  this.radarColor.miscellaneous
              ],
              borderColor: [
                  this.radarColor.operating,
                  this.radarColor.regulatory,
                  this.radarColor.reputational,
                  this.radarColor.sectorial,
                  this.radarColor.miscellaneous
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  private initQuestions() : void {
    this.formDetails.map((formDetail: FormDetail) => {
      let answers: Answer[] = []

      formDetail.pointMax.forEach((pointMax: IObtainedPoint) => {
        let answer: Answer = new Answer({
          idQuestion: formDetail.idQuestion,
          idAnswer: pointMax.idReponse,
          point: pointMax.pointQuestion
        })

        answers.push(answer)
      })

      this.questions.push(new Question<any>({
        id: formDetail.idQuestion,
        label: formDetail.labelQuestion,
        idCategory: formDetail.idCategory,
        value: formDetail.labelChosenAnswer,
        obtainedPoints: formDetail.obtainedPoint,
        answersLoaded: answers
      }))
    })
  }

  private initCategories() : void {
    this.formDetails.map((formDetail: FormDetail) => {
      const category = new Category({
        id: formDetail.idCategory,
        label: formDetail.labelCategory
      })

      if (!this.utils.contains(category, this.categories)) {
        this.categories.push(category);
      }    
    })
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
