import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/model/form';
import { ChartDashboard } from 'src/tools/chart-dashboard';
import { Chart, registerables } from 'chart.js';
import { color, colorBorder } from 'src/variable/script/color';
Chart.register(...registerables);

@Component({
  selector: 'app-buisness-line-distribution',
  templateUrl: './buisness-line-distribution.component.html',
  styleUrls: ['./buisness-line-distribution.component.scss']
})
export class BuisnessLineDistributionComponent implements OnInit {

  @Input() forms!: Form[];

  color = color;
  colorBorder = colorBorder;

  private chartDashboard: ChartDashboard = ChartDashboard.getInstance();

  constructor() { }

  ngOnInit(): void {
    let datasets = this.chartDashboard.fillDataSets(this.chartDashboard.buisnessLineArray(this.forms))

    const myChart = new Chart("buisness-line-distribution", {
      type: 'bar',
      data: {
          labels: datasets[0],
          datasets: [
            {
              label: 'Low',
              data: datasets[1],
              backgroundColor: [
                this.color.low,
              ],
              borderColor: [
                this.colorBorder.low,
              ],
              borderWidth: 1,
            },
            {
              label: 'Medium',
              data: datasets[2],
              backgroundColor: [
                this.color.medium,
              ],
              borderColor: [
                this.colorBorder.medium,
              ],
              borderWidth: 1,
            },
            {
              label: 'High',
              data: datasets[3],
              backgroundColor: [
                this.color.high,
              ],
              borderColor: [
                this.colorBorder.high,
              ],
              borderWidth: 1,
            },
            {
              label: 'Critical',
              data: datasets[4],
              backgroundColor: [
                this.color.critical,
              ],
              borderColor: [
                this.colorBorder.critical,
              ],
              borderWidth: 1,
            },
          ]
      },
      options: {
        scales: {
          xAxis: {
            stacked: true
          },
          yAxis: {
            stacked: true
          }
        },
        responsive: true,
      }
    });
  }

}
