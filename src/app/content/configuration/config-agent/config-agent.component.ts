import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common.service';

@Component({
  selector: 'app-config-agent',
  templateUrl: './config-agent.component.html',
  styleUrls: ['./config-agent.component.css']
})
export class ConfigAgentComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }

  //intrusion_Wazuh(){
  //  //window.open("http://192.168.0.249:9000/#/overview?host=kng-cluster");
  //  this.commonService.getWazuhagentList("/wazuh/agents");
  //};
}
