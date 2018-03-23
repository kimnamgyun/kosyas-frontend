import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

import { WazuhAgentList } from '../connect-data';
import { WazuhAgentList_Data } from '../connect-data';
import { WazuhAgentList_Item } from '../connect-data';
import { WazuhAgentList_Os } from '../connect-data';
import { WazuhManagerStatus } from '../connect-data';

@Component({
  selector: 'app-agent-config',
  templateUrl: './agent-config.component.html',
  styleUrls: ['./agent-config.component.css']
})
export class AgentConfigComponent implements OnInit {

  wazuhagentlists:WazuhAgentList_Item [];
  wazuhagentlist:WazuhAgentList_Item;
  fullWazuhagentlists:WazuhAgentList;
  selectWazuhagent:WazuhAgentList_Item;
  wazuhmanagerStatus:WazuhManagerStatus;
  
  
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.getWazuhManagerStatus();
    this.getWazuhAgentList();
  }

  getWazuhManagerStatus(){
    this.commonService.getWazuhmanagerStatus().subscribe(wazuhmanagerStatus => this.wazuhmanagerStatus = wazuhmanagerStatus);
  }

  getWazuhAgentList(){
    this.commonService.getWazuhagentList("/wazuh/agents").subscribe(fullWazuhagentlists => this.fullWazuhagentlists = fullWazuhagentlists);
    this.wazuhagentlists = this.fullWazuhagentlists.data.items;
    alert(this.fullWazuhagentlists.data.totalItems);
  }

  onSelectAgent(wazuhagent:WazuhAgentList_Item){
    this.selectWazuhagent = wazuhagent;
  }
}
