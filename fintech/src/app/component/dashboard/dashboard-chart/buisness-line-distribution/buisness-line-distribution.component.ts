import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/model/form';
import { ChartDashboard } from 'src/tools/chart-dashboard';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-buisness-line-distribution',
  templateUrl: './buisness-line-distribution.component.html',
  styleUrls: ['./buisness-line-distribution.component.scss']
})
export class BuisnessLineDistributionComponent implements OnInit {

  @Input() forms!: Form[];

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
                'rgba(206, 206, 206)',
              ],
              borderColor: [
                'rgba(206, 206, 206)',
              ],
              borderWidth: 1,
            },
            {
              label: 'Medium',
              data: datasets[2],
              backgroundColor: [
                'rgba(150, 150, 150)',
              ],
              borderColor: [
                'rgba(150, 150, 150)',
              ],
              borderWidth: 1,
            },
            {
              label: 'High',
              data: datasets[3],
              backgroundColor: [
                'rgba(102, 102, 102)',
              ],
              borderColor: [
                'rgba(102, 102, 102)',
              ],
              borderWidth: 1,
            },
            {
              label: 'Critical',
              data: datasets[4],
              backgroundColor: [
                'rgba(50, 50, 50)',
              ],
              borderColor: [
                'rgba(50, 50, 50)',
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
