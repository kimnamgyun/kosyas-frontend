import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  intrusion_kibana() {
    window.open("http://192.168.0.202:5601/app/kibana#/dashboard/Audit?_g=(refreshInterval%3A(display%3AOff%2Cpause%3A!f%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1y%2Cmode%3Aquick%2Cto%3Anow))");
  };

}
