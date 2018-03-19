import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {
  //id = 'chart1';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;
  //title = 'Log Count statistics';

  constructor() {
      this.dataSource = {
          "chart": {
              "caption": "Index:wazuh-*",
              "subCaption": "Wazuh Log Month/count",
              "numberprefix": "",
              "theme": "fint"
          },
          "data": [
              {
                  "label": "2017.11",
                  "value": "188000"
              },
              {
                  "label": "2017.12",
                  "value": "130000"
              },
              {
                  "label": "2018.1",
                  "value": "190000"
              },
              {
                  "label": "2018.2",
                  "value": "220000"
              },
              {
                  "label": "2018.3",
                  "value": "70000"
              }
          ]
      }
  }


  ngOnInit() {
  }

}
