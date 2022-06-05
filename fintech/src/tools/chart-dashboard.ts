import { IRiskDistribution } from "src/app/interfaces/chart-data/risk-distribution";
import { Form } from "src/model/form";
import { Utils } from "./utils";

export class ChartDashboard {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static instance: ChartDashboard;
    private utils: Utils = Utils.getInstance();

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe ChartDashboard 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    public static getInstance() : ChartDashboard {
        if (!ChartDashboard.instance) {
            ChartDashboard.instance = new ChartDashboard();
        }

        return ChartDashboard.instance;
    }

    // ----------------
    // Méthode
    // ----------------

    public riskDistribution(forms: Form[]) : IRiskDistribution {
        let data: IRiskDistribution = {
            low: 0,
            medium: 0,
            high: 0, 
            critical: 0
        };

        forms.forEach((form) => {
            let risk: string = this.utils.inherentRisk(form.totalPoint);

            if (risk === "Low") {
                data["low"] += 1;
            } else if (risk === "Medium") {
                data["medium"] += 1;
            } else if (risk === "High") {
                data["high"] += 1;
            } else if (risk === "Critical") {
                data["critical"] += 1;
            } 
        });

        return data;
    }

    public meanRisk(forms: Form[]) : number {
        let sum: number = 0;

        forms.forEach((form: Form) => {
            sum += form.totalPoint;
        })

        return sum / forms.length;
    }

    public buisnessLineArray(forms: Form[]) : any[] {
        let formsByBuisnessLine : any = {}

        forms.forEach((form: Form) => {
            if (!formsByBuisnessLine.hasOwnProperty(form.labelBuisnessLine)) {
                formsByBuisnessLine[form.labelBuisnessLine] = {
                    low: 0,
                    medium: 0,
                    high: 0, 
                    critical: 0
                };
            } 

            let risk: string = this.utils.inherentRisk(form.totalPoint);

            if (risk === "Low") {
                formsByBuisnessLine[form.labelBuisnessLine]["low"] += 1;
            } else if (risk === "Medium") {
                formsByBuisnessLine[form.labelBuisnessLine]["medium"] += 1;
            } else if (risk === "High") {
                formsByBuisnessLine[form.labelBuisnessLine]["high"] += 1;
            } else if (risk === "Critical") {
                formsByBuisnessLine[form.labelBuisnessLine]["critical"] += 1;
            }   
        })

        console.log(formsByBuisnessLine)

        return formsByBuisnessLine;
    }

    public fillDataSets(datas: any) {
        let datasets: any[] = [];

        let label: any[] = [];
        let low: number[] = []
        let medium: number[] = []
        let high: number[] = []
        let critical: number[] = []

        Object.keys(datas).forEach((data: any) => {
            label.push(data);
        })

        Object.values(datas).forEach((data: any) => {
            low.push(data['low'])
            medium.push(data['medium'])
            high.push(data['high'])
            critical.push(data['critical'])
        })


        return [label, low, medium, high, critical];
    }


    
}