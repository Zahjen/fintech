import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/model/form';
import { Chart, registerables } from 'chart.js';
import { ChartDashboard } from 'src/tools/chart-dashboard';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { color, colorBorder } from 'src/variable/script/color';
Chart.register(...registerables);

@Component({
  selector: 'app-overall-risk-distribution',
  templateUrl: './overall-risk-distribution.component.html',
  styleUrls: ['./overall-risk-distribution.component.scss']
})
export class OverallRiskDistributionComponent implements OnInit {

  @Input() forms!: Form[];

  color = color;
  colorBorder = colorBorder;

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
                this.color.low,
                this.color.medium,
                this.color.high,
                this.color.critical,
              ],
              borderColor: [
                this.colorBorder.low,
                this.colorBorder.medium,
                this.colorBorder.high,
                this.colorBorder.critical
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
        responsive: true,
        plugins: {
          datalabels: {
            formatter: (value) => {
              return value === 0 ? '' : Number(value / this.forms.length * 100).toFixed(2) + ' %';
            },
            color: 'rgb(0,0,0)',
          },
          legend: {
            onClick: () => {}
          }
        }
      },
    });
  }

}
