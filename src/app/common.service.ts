import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
//import { Http } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { TabListForm } from './navi-list';
import { TAB_LIST} from './navi-list';
import { CelebroOverview_full } from './connect-data';
import { CelebroOverview } from './connect-data';
import { WazuhAgentList } from './connect-data';
import { WazuhManagerStatus } from './connect-data';

import "rxjs/add/operator/map";

@Injectable()
export class CommonService {

  //OverviewData: CelebroOverview;
  baseURL = 'http://192.168.0.249:3001';

  testURL  = "http://localhost:4200";
  testURL1 = "http://192.168.0.116:4200";
  testURL2 = "http://192.168.0.118:8088"
  fulltestURL2 = "http://192.168.0.118:8088/assets/test.json";
  fullcelebroURL = 'http://192.168.0.249:3001/cats/overview';

  constructor(public http:HttpClient) { }

  getTabLists(): Observable<TabListForm[]> {
    return of(TAB_LIST);
  }

  getCelebroOverview(){
    //return this.http.get("http://192.168.0.249:3001/cats/overview").map(res=>res.json());
    
    return this.http.get<CelebroOverview_full>(this.fullcelebroURL);
    //return this.http.get<CelebroOverview>(this.baseURL.concat('/cats/overview'));
    //return this.http.get<CelebroOverview>(this.testURL2.concat('/assets/test.json'));
    //return this.http.get<CelebroOverview>(this.fulltestURL2);
  }

  getWazuhagentList(uri:string){
    //return this.http.get<string>(this.baseURL.concat('/wazuh/agents')).subscribe(data => alert(data));
    return this.http.get<WazuhAgentList>(this.baseURL.concat(uri));
  }

  getWazuhmanagerStatus(){
    return this.http.get<WazuhManagerStatus>(this.baseURL.concat("/wazuh/manager/status"));
  }
}