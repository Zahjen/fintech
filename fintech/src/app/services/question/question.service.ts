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
                        points: 0, 
                        value: 'Finance'},
                    {
                        key: 'pharmaceutique',
                        points: 0,  
                        value: 'Pharmaceutique'
                    },
                    {
                        key: 'agroalimentaire',
                        points: 0,   
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
                        points: 0,  
                        value: 'France'},
                    {
                        key: 'germany',
                        points: 0,  
                        value: 'Germany'
                    },
                    {
                        key: 'finland',
                        points: 0,   
                        value: 'Finland'
                    },
                ],
            }),

            new QuestionRadioLevel({
                id: 3,
                key: "question3",
                label: "Can the deficiency of the Third Party cause an interruption of service of the Requesting Party for a critical (over 4weeks), high, (2-3weeks), medium (1-2weeks), low (under 24hours) period of time ?  ?",
                answers: [
                    {
                        key: "low",
                        points: 0,  
                        value: "Low"
                    },
                    {
                        key: "medium",
                        points: 4,  
                        value: "Medium"
                    },
                    {
                        key: "high",
                        points: 9,  
                        value: "High"
                    },
                    {
                        key: "critical",
                        points: 18,  
                        value: "Critical"
                    }
                ]
            }),

            new QuestionRadioLevel({
                id: 4,
                key: "question4",
                label: "How difficult would it be to replace the Third Party ?",
                answers: [
                    {
                        key: "low",
                        points: 0,  
                        value: "Low"
                    },
                    {
                        key: "medium",
                        points: 2,  
                        value: "Medium"
                    },
                    {
                        key: "high",
                        points: 4,  
                        value: "High"
                    }
                ]
            }),

            new QuestionRadioYesNo({
                id: 5,
                key: "question5",
                label: "Is the Third Party subject to any regulatory or compliance requirements? Is it supervised ?",
                answers: [
                    {
                        key: "yes",
                        points:  0,
                        value: "Yes"
                    },
                    {
                        key: "no",
                        points: 1,
                        value: "No"
                    }
                ]
            }),

            new QuestionRadioYesNo({
                id: 6,
                key: "question6",
                label: "Does the Third Party handle Personal Information subject to GDPR requirements ? ",
                answers: [
                    {
                        key: "yes",
                        points:  2,
                        value: "Yes"
                    },
                    {
                        key: "no",
                        points:  0,
                        value: "No"
                    }
                ]
            }),

            new QuestionRadioYesNo({
                id: 7,
                key: "question7",
                label: "Will the Third Party have access to sensitive information pertaining to your business operations ?",
                answers: [
                    {
                        key: "yes",
                        points:  7,
                        value: "Yes"
                    },
                    {
                        key: "no",
                        points: 0,
                        value: "No"
                    }
                ]
            }),

            new QuestionRadioYesNo({
                id: 8,
                key: "question8",
                label: "Will the data of the Requesting Company be stored in the cloud ?",
                answers: [
                    {
                        key: "yes",
                        points:  3,
                        value: "Yes"
                    },
                    {
                        key: "no",
                        points:  0,
                        value: "No"
                    }
                ]
            }),

            new QuestionRadioYesNo({
                id: 9,
                key: "question9",
                label: "Will the Third Party perform the service directly ? (outsourcing < 15%)",
                answers: [
                    {
                        key: "yes",
                        points:  0,
                        value: "Yes"
                    },
                    {
                        key: "no",
                        points:  1,
                        value: "No"
                    }
                ]
            }),

            new QuestionRadioYesNo({
                id: 10,
                key: "question10",
                label: "Will the Third Party have access to the IT infrastructure of the Requesting Company ?",
                answers: [
                    {
                        key: "yes",
                        points:  4,
                        value: "Yes"
                    },
                    {
                        key: "no",
                        points:  0,
                        value: "No"
                    }
                ]
            }),

            new QuestionRadioYesNo({
                id: 11,
                key: "question11",
                label: "Was/is the Third Party involved in any activity that could reflect negatively on the Requesting Company ?",
                answers: [
                    {
                        key: "yes",
                        points:  1,
                        value: "Yes"
                    },
                    {
                        key: "no",
                        points:  0,
                        value: "No"
                    }
                ]
            }),

            new QuestionRadioYesNo({
                id: 12,
                key: "question12",
                label: "Does the Third Party comply with the public opinion of your country ?",
                answers: [
                    {
                        key: "yes",
                        points:  0,
                        value: "Yes"
                    },
                    {
                        key: "no",
                        points:  1,
                        value: "No"
                    }
                ]
            }),

            new QuestionRadioYesNo({
                id: 13,
                key: "question13",
                label: "Is the Third Party's brand known to the public ?",
                answers: [
                    {
                        key: "yes",
                        points:  0,
                        value: "Yes"
                    },
                    {
                        key: "no",
                        points:  1,
                        value: "No"
                    }
                ]
            }),

            new QuestionRadioLevel({
                id: 14,
                key: "question14",
                label: "What is the expected annual financial contract amount of the Third-Party service ?",
                answers: [
                    {
                        key: "low",
                        points: 0,  
                        value: "Low"
                    },
                    {
                        key: "medium",
                        points: 1,  
                        value: "Medium"
                    },
                    {
                        key: "high",
                        points: 3,  
                        value: "High"
                    }
                ]
            }),

            new QuestionRadioYesNo({
                id: 15,
                key: "question15",
                label: "Is the Third Party listed or part of a listed group ?",
                answers: [
                    {
                        key: "yes",
                        points:  0,
                        value: "Yes"
                    },
                    {
                        key: "no",
                        points:  1,
                        value: "No"
                    }
                ]
            }),

            new QuestionRadioYesNo({
                id: 16,
                key: "question16",
                label: "Can the Third Party adapt to changes due to unforeseen events ?",
                answers: [
                    {
                        key: "yes",
                        points:  0,
                        value: "Yes"
                    },
                    {
                        key: "no",
                        points:  1,
                        value: "No"
                    }
                ]
            })
        ];

        return questions;
    }
  
}
