import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-config',
  templateUrl: './system-config.component.html',
  styleUrls: ['./system-config.component.css']
})
export class SystemConfigComponent implements OnInit {
  subject ="Elasticsearch";
  node = "1";
  indice = "127";
  shard ="1,263";
  doc ="45,318,380";
  capable = "16.18";
  unit = "GB";

  name="sC_XMh";
  load="0.00";
  process="30%";
  heap="62%";
  disk="77%";
  uptime="24d";
  
  constructor() { }

  ngOnInit() {
  }

}
