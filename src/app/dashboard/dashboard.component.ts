import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApexGrid, ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexFill,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  fill: ApexFill;
  grid: ApexGrid;
  colors: any;
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public stations = [
    { 
      title : "Mwenge",
      number: 32990,
      width: 72.3
    },
    { 
      title : "Kawe",
      number: 32580,
      width: 68.5
    },
    { 
      title : "Ilala",
      number: 5290,
      width: 47.3
    },
    { 
      title : "Kinondoni",
      number: 3990,
      width: 32.3
    },
  ];

  constructor(private titleService: Title) { 
    this.titleService.setTitle("Dashboard - Puma");


    this.chartOptions = {
      series: [25, 15, 44],
      fill: {
        opacity: 1,
        colors: ["#ec1c29", "#ec1c29", "#ec1c29"],
      },
      grid: {
        strokeDashArray: 4,
      },
      chart: {
        width: "100%",
        type: "donut",
        fontFamily: 'inherit',
        height: 240,
        sparkline: {
          enabled: true
        },
        animations: {
          enabled: false
        },
      
        
      },
     
      
      labels: [
        "Diesel",
        "Kerosene",
        "Unleaded",
        
      ],
      theme: {
        monochrome: {
          enabled: true,
          color: "#ec1c29",
        } },
        title: {
          text: "Sales Summary"
        },
        subtitle: {
          text: "Last 7 Days"
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
  }

  ngOnInit(): void {
  }

}
