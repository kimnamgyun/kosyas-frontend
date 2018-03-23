import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart2-line',
  templateUrl: './chart2-line.component.html',
  styleUrls: ['./chart2-line.component.css']
})
export class Chart2LineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  width = 600;
  height = 400;
  type = 'mscombi2d';
  dataFormat = 'json';
  dataSource = {
    "chart": {
      "caption": "Actual Revenues, Targeted Revenues & Profits",
      "subcaption": "2017",
      "xaxisname": "Month",
      "yaxisname": "Amount",
      "numberprefix": "",
      "theme": "fint"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Jan"
          },
          {
            "label": "Feb"
          },
          {
            "label": "Mar"
          },
          {
            "label": "Apr"
          },
          {
            "label": "May"
          },
          {
            "label": "Jun"
          },
          {
            "label": "Jul"
          },
          {
            "label": "Aug"
          },
          {
            "label": "Sep"
          },
          {
            "label": "Oct"
          },
          {
            "label": "Nov"
          },
          {
            "label": "Dec"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "Actual Revenue",
        "renderas": "line",
        "showvalues": "0",
        "data": [
          {
            "value": "16000"
          },
          {
            "value": "20000"
          },
          {
            "value": "18000"
          },
          {
            "value": "19000"
          },
          {
            "value": "15000"
          },
          {
            "value": "21000"
          },
          {
            "value": "16000"
          },
          {
            "value": "20000"
          },
          {
            "value": "17000"
          },
          {
            "value": "25000"
          },
          {
            "value": "19000"
          },
          {
            "value": "29000"
          }
        ]
      },
      {
        "seriesname": "Projected Revenue",
        "renderas": "line",
        "showvalues": "0",
        "data": [
          {
            "value": "15000"
          },
          {
            "value": "16000"
          },
          {
            "value": "17000"
          },
          {
            "value": "18000"
          },
          {
            "value": "19000"
          },
          {
            "value": "19000"
          },
          {
            "value": "19000"
          },
          {
            "value": "19000"
          },
          {
            "value": "20000"
          },
          {
            "value": "21000"
          },
          {
            "value": "22000"
          },
          {
            "value": "23000"
          }
        ]
      },
      {
        "seriesname": "Profit",
        "renderas": "area",
        "showvalues": "0",
        "data": [
          {
            "value": "4000"
          },
          {
            "value": "5000"
          },
          {
            "value": "3000"
          },
          {
            "value": "4000"
          },
          {
            "value": "1000"
          },
          {
            "value": "7000"
          },
          {
            "value": "1000"
          },
          {
            "value": "4000"
          },
          {
            "value": "1000"
          },
          {
            "value": "8000"
          },
          {
            "value": "2000"
          },
          {
            "value": "12000"
          }
        ]
      }
    ]
  };

}
