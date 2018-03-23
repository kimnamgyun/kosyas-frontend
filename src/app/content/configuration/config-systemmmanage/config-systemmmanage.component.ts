import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-systemmmanage',
  templateUrl: './config-systemmmanage.component.html',
  styleUrls: ['./config-systemmmanage.component.css']
})
export class ConfigSystemmmanageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  intrusion_Celebro(){
      window.open("http://192.168.0.249:9000/#/overview?host=kng-cluster");
  };

}