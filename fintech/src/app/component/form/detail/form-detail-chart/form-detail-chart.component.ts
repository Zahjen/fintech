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
import { Router } from '@angular/router';
Chart.register(...registerables);

@Component({
  selector: 'app-form-detail-chart',
  templateUrl: './form-detail-chart.component.html',
  styleUrls: ['./form-detail-chart.component.scss']
})
export class FormDetailChartComponent implements OnInit {

  @Input() formDetails!: FormDetail[];
  @Input() form!: Form;

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
      type: 'bar',
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
