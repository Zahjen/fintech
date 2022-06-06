import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/model/form';
import { ChartDashboard } from 'src/tools/chart-dashboard';
import { Chart, registerables } from 'chart.js';
import { color, colorBorder } from 'src/variable/script/color';
Chart.register(...registerables);

@Component({
  selector: 'app-risk-gauge',
  templateUrl: './risk-gauge.component.html',
  styleUrls: ['./risk-gauge.component.scss']
})
export class RiskGaugeComponent implements OnInit {

  @Input() forms!: Form[];

  color = color;
  colorBorder = colorBorder;

  private chartDashboard: ChartDashboard = ChartDashboard.getInstance();

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart("gauge-risk", {
      type: 'doughnut',
      data: {
          labels: Object.keys(this.chartDashboard.riskDistribution(this.forms)),
          datasets: [{
              label: 'Questions repartition',
              data: [10, 18, 24, 52],
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
          },
          {
            label: 'Issues',
            backgroundColor: 'black',
            borderColor: 'black',
            borderWidth: 1,
            data: [1],
            circumference: 2,
            rotation: -90 + this.chartDashboard.meanRisk(this.forms) * 180 / 52,
          }],
      },
      options: {
        cutout: 0,
        responsive: true,
        plugins: {
          tooltip: {
            enabled: false
          },
          legend: {
            onClick: () => {}
          }
        },
    }
    });

  }
}
