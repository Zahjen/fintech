import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Question } from 'src/model/question';
import { QuestionDropdown } from 'src/model/question-dropdown';
import { QuestionRadioLevel } from 'src/model/question-radio-level';
import { QuestionRadioYesNo } from 'src/model/question-radio-yes-no';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

    constructor() {}

    // Méthode permettant de récuperer un ensemble de question
    getQuestions() {
        const questions: Question<string>[] = [

            new QuestionDropdown({
                id: 1,
                key: "question1",
                label: "What is the sector of activity of this Third Party ?",
                isHidden: false,
                answers: [
                    {
                        key: 'finance',  
                        value: 'Finance'},
                    {
                        key: 'pharmaceutique',  
                        value: 'Pharmaceutique'
                    },
                    {
                        key: 'agroalimentaire',   
                        value: 'Agroalimentaire'
                    },
                ],
            }),

            new QuestionDropdown({
                id: 2,
                key: "question2",
                label: "In which Country is the service performed ?",
                answers: [
                    {
                        key: 'france',  
                        value: 'France'},
                    {
                        key: 'germany',  
                        value: 'Germany'
                    },
                    {
                        key: 'finland',   
                        value: 'Finland'
                    },
                ],
            }),

            new QuestionRadioLevel({
                id: 3,
                key: "question3",
                label: "Is the service critical to the business operations of the Requesting Company ?",
            }),

            new QuestionRadioLevel({
                id: 4,
                key: "question4",
                label: "How difficult would it be to replace the Third Party ?",
            }),

            new QuestionRadioYesNo({
                id: 5,
                key: "question5",
                label: "Is the Third Party subject to any regulatory or compliance requirements? Is it supervised ?",
            }),

            new QuestionRadioYesNo({
                id: 6,
                key: "question6",
                label: "Does the Third Party handle Personal Information subject to GDPR requirements ? ",
            }),

            new QuestionRadioYesNo({
                id: 7,
                key: "question7",
                label: "Will the Third Party have access to sensitive information pertaining to your business operations ?",
            }),

            new QuestionRadioYesNo({
                id: 8,
                key: "question8",
                label: "Will the data of the Requesting Company be stored in the cloud ?",
            }),

            new QuestionRadioYesNo({
                id: 9,
                key: "question9",
                label: "Will the Third Party perform the service directly ? (outsourcing < 15%)",
            }),

            new QuestionRadioYesNo({
                id: 10,
                key: "question10",
                label: "Will the Third Party have access to the IT infrastructure of the Requesting Company ?",
            }),

            new QuestionRadioYesNo({
                id: 11,
                key: "question11",
                label: "Was/is the Third Party involved in any activity that could reflect negatively on the Requesting Company ?",
            }),

            new QuestionRadioYesNo({
                id: 12,
                key: "question12",
                label: "Does the Third Party comply with the public opinion of your country ?",
            }),

            new QuestionRadioYesNo({
                id: 13,
                key: "question13",
                label: "Is the Third Party's brand known to the public ?",
            }),

            new QuestionRadioLevel({
                id: 14,
                key: "question14",
                label: "What is the expected annual financial contract amount of the Third-Party service ?",
            }),

            new QuestionRadioYesNo({
                id: 15,
                key: "question15",
                label: "Is the Third Party listed or part of a listed group ?",
            }),

            new QuestionRadioYesNo({
                id: 16,
                key: "question16",
                label: "Can the Third Party adapt to changes due to unforeseen events ?",
            })
        ];

        return questions;
    }
  
}
