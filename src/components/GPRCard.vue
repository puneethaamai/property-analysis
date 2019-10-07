<template>
  <div>
    <div class="card">
      <div class="card-header cd-header">Gross Potential Rent</div>
      <div class="card-body mychart">
        <canvas :height="191" :hv-show="gprChart" :id="grossPotentialRentID"></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ChartPie from './ChartPie.vue';
import Chart from 'chart.js';

@Component({
  components: {
    ChartPie
  }
})
export default class NavBar extends Vue {
  private loaded = false;
  private id = Math.random()
    .toString(36)
    .substring(7);
  private gprChart: Chart | null = null;

  get grossPotentialRentID() {
    return `gross-potential-rent-${this.id}`;
  }

  private chartData = {
    datasets: [
      {
        data: [20, 30, 50, 10, 60, 80],
        backgroundColor: [
          '#B2DFDB',
          '#80CBC4',
          '#4DB6AC',
          '#26A69A',
          '#009688',
          '#009680'
        ]
      }
    ],
    labels: [
      'Salaries & Personnel',
      'Repairs & Maintenance',
      'Contract Services',
      'Marketing & Advertising',
      'Administrative',
      'Utilities'
    ]
  };
  private chartOptions: object = {
    responsive: true,
    maintainAspectRatio: false
  };

  private createChart(chartId: string, chartData: any): Chart {
    const ctx: HTMLCanvasElement = document.getElementById(
      chartId
    ) as HTMLCanvasElement;
    return new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options
    });
  }

  private mounted() {
    setTimeout(() => {
      this.loaded = true;
      const data = {
        type: 'bar',
        data: {
          datasets: [
            {
              label: 'Net Rentable Income',
              data: [
                1670544,
                1655497,
                1666943,
                1655449,
                1632173,
                1608995,
                1635788,
                1624149,
                1649718,
                1656558,
                1659918,
                1643396
              ],
              backgroundColor: '#F9E79F'
            },
            {
              label: 'Less Vacancy Loss',
              data: [
                14551,
                21936,
                22973,
                23239,
                31656,
                44917,
                39591,
                28994,
                15946,
                15026,
                21762,
                27914
              ],
              backgroundColor: '#ABEBC6'
            },
            {
              label: 'Less Bad Debt',
              data: [
                541314,
                531571,
                534541,
                530717,
                518161,
                510531,
                514059,
                521692,
                535988,
                537458,
                532731,
                528998
              ],
              backgroundColor: '#AED6F1'
            },
            {
              label: 'Less Concessions',
              data: [
                0,
                0,
                0,
                0,
                2060,
                29118,
                2575,
                15353,
                7318,
                3430,
                0,
                16877
              ],
              backgroundColor: '#CCD1D1'
            }
          ],
          labels: [
            '1/1/2019',
            '2/1/2019',
            '3/1/2019',
            '4/1/2019',
            '5/1/2019',
            '6/1/2019',
            '7/1/2019',
            '8/1/2019',
            '9/1/2019',
            '10/1/2019',
            '11/1/2019',
            '12/1/2019'
          ]
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [
              {
                stacked: true
              }
            ],
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: false,
                  min: 1448095.5,
                  autoSkip: true
                }
              }
            ]
          },
          tooltips: {
            mode: 'index',
            intersect: false,
            bodySpacing: 8,
            callbacks: {}
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              boxWidth: 15
            }
          }
        }
      };
      this.gprChart = this.createChart(this.grossPotentialRentID, data);
    }, 500);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mychart {
  min-height: 340px;
}
</style>