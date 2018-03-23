import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { CelebroOverview_full } from '../connect-data';
import { CelebroOverview } from '../connect-data';

@Component({
  selector: 'app-system-config',
  templateUrl: './system-config.component.html',
  styleUrls: ['./system-config.component.css']
})
export class SystemConfigComponent implements OnInit {
  subject ="Elasticsearch";

  name="sC_XMh";
  load="0.00";
  process="30%";
  heap="62%";
  disk="77%";
  uptime="24d";
  
  celebroFullData : CelebroOverview_full;
  celebroData :CelebroOverview;

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.getCelebroOverview();
  }

  getCelebroOverview(){
    this.commonService.getCelebroOverview()
    .subscribe(celebroFullData => this.celebroFullData = celebroFullData);
    
    //alert(this.celebroData.disk);
    //this.commonService.getCelebroOverview().subscribe(celebroData =>this.celebroData = celebroData);
    /*
    if (!this.celebroData.node){
      this.message = "celebro error";
    }
    */
  }
}
