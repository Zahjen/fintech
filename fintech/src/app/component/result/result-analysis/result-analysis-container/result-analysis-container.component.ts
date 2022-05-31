import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryAdaptedService } from 'src/app/services/adapted-data/category-adapted/category-adapted.service';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Category } from 'src/model/category';
import { ThirdParty } from 'src/model/third-party';
import { formOverview } from 'src/variable/script/router-link';

@Component({
  selector: 'app-result-analysis-container',
  templateUrl: './result-analysis-container.component.html',
  styleUrls: ['./result-analysis-container.component.scss']
})
export class ResultAnalysisContainerComponent implements OnInit {

  categories$!: Observable<Category[]>;
  
  chosenThirdParty!: ThirdParty;
  formOverview = formOverview;

  constructor(
    private categoryAdaptedService: CategoryAdaptedService,
    private sharedFormData: SharedFormDataService
  ) { }

  ngOnInit(): void {
    this.initCategories();
    this.initChosenThirdParty();
  }

  private initCategories() : void {
    this.categories$ = this.categoryAdaptedService.getAll();
  }

  private initChosenThirdParty() : void {
    this.chosenThirdParty = this.sharedFormData.getThirdPaty();
  }

}
