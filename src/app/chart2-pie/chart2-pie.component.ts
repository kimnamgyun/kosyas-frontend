import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart2-pie',
  templateUrl: './chart2-pie.component.html',
  styleUrls: ['./chart2-pie.component.css']
})
export class Chart2PieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    width = 600;
    height = 400;
    type = 'pie2d';
    dataFormat = 'json';
    dataSource = {
    "chart": {
        "caption": "Number of logs per index",
        "subcaption": "percentage",
        "startingangle": "240",
        "showlabels": "1",
        "showlegend": "0",
        "enablemultislicing": "0",
        "slicingdistance": "15",
        "showpercentvalues": "1",
        "showpercentintooltip": "0",
        "plottooltext": "Age group : $label Total visit : $datavalue",
        "theme": "fint"
    },
    "data": [
        {
            "label": "OSSEC",
            "value": "1250400"
        },
        {
            "label": "WAZUH",
            "value": "1463300"
        },
        {
            "label": "SYSTEM",
            "value": "1050700"
        },
        {
            "label": "Vuln.",
            "value": "491000"
        }
    ]
	};

}
