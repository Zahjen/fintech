import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/model/form';
import { Chart, registerables } from 'chart.js';
import { ChartDashboard } from 'src/tools/chart-dashboard';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables);

@Component({
  selector: 'app-overall-risk-distribution',
  templateUrl: './overall-risk-distribution.component.html',
  styleUrls: ['./overall-risk-distribution.component.scss']
})
export class OverallRiskDistributionComponent implements OnInit {

  @Input() forms!: Form[];

  private chartDashboard: ChartDashboard = ChartDashboard.getInstance();

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart("overall-risk", {
      type: 'doughnut',
      data: {
          labels: Object.keys(this.chartDashboard.riskDistribution(this.forms)),
          datasets: [{
              label: 'Questions repartition',
              data: Object.values(this.chartDashboard.riskDistribution(this.forms)),
              backgroundColor: [
                'rgba(206, 206, 206, 0.5)',
                'rgba(150, 150, 150, 0.5)',
                'rgba(102, 102, 102, 0.5)',
                'rgba(50, 50, 50, 0.5)',
              ],
              borderColor: [
                'rgba(206, 206, 206, 1)',
                'rgba(150, 150, 150, 1)',
                'rgba(102, 102, 102, 1)',
                'rgba(50, 50, 50, 1)',
              ],
              borderWidth: 1,
              circumference: 180,
              rotation: -90,
          }],
      },
      plugins: [
        ChartDataLabels
      ],
      options: {
        plugins: {
          datalabels: {
            formatter: (value) => {
              return value === 0 ? '' : Number(value / this.forms.length * 100).toFixed(2) + ' %';
            },
            color: 'rgb(0,0,0)',
          }
        }
      },
    });
  }

}
