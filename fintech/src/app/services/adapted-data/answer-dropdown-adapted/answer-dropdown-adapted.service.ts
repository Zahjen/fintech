import { Injectable } from '@angular/core';
import { concat, concatAll, concatMap, defer, forkJoin, map, mergeAll, mergeMap, Observable, of, Subject, switchMap } from 'rxjs';
import { AnswerDropdownAdapter } from 'src/adapter/answer-dropdown-adapter';
import { IAnswer } from 'src/app/interfaces/object-from-api/answer';
import { IBuisnessLine } from 'src/app/interfaces/object-from-api/buisness-line';
import { ICountry } from 'src/app/interfaces/object-from-api/country';
import { IObtainedPoint } from 'src/app/interfaces/object-from-api/obtained-point';
import { AnswerDropdown } from 'src/model/answer-dropdown';
import { BuisnessLineService } from '../../data-from-api/buisness-line/buisness-line.service';
import { CountryService } from '../../data-from-api/country/country.service';
import { ObtainedPointService } from '../../data-from-api/obtained-point/obtained-point.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerDropdownAdaptedService {

  constructor(
    private countryService: CountryService,
    private buisnessLineService: BuisnessLineService,
    private obtainedPointService: ObtainedPointService,
    private answerDropdownAdapter: AnswerDropdownAdapter
  ) { }

  getAdaptedCountry(idQuestion: number) {
    const answers: AnswerDropdown[] = [];
    let subject = new Subject<AnswerDropdown[]>();

    this.countryService
      .getAll()
      .subscribe((countryList: ICountry[]) => {
        countryList.forEach((country: ICountry) => {
          this.obtainedPointService
            .getObtainedPointByIdQuestionAndAnswer(idQuestion, country.idReponse)
            .subscribe((obtainedPoint: IObtainedPoint) => {
                answers.push(
                  this.answerDropdownAdapter.adapt(obtainedPoint, country.nomPays, country.idPays)
                )
                subject.next(answers)
            })
        })
      })

    return subject.asObservable();
  }

  getAdaptedBuisnessLine(idQuestion: number) {
    const answers: AnswerDropdown[] = [];
    let subject = new Subject<AnswerDropdown[]>();

    this.buisnessLineService
      .getAll()
      .subscribe((buisnessLineList: IBuisnessLine[]) => {
        buisnessLineList.forEach((buisnessLine: IBuisnessLine) => {
          this.obtainedPointService
            .getById(idQuestion)
            .subscribe((obtainedPointList: IObtainedPoint[]) => {
              obtainedPointList.forEach((obtainedPoint: IObtainedPoint) => {
                answers.push(
                  this.answerDropdownAdapter.adapt(obtainedPoint, buisnessLine.labelSecteur, buisnessLine.idSecteur)
                )

                subject.next(answers)
              })
            })
        })
      })

    return subject.asObservable();
  }
  
}
