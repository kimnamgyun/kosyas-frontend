import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { TabListForm } from '../navi-list';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.css']
})
export class TabmenuComponent implements OnInit {
  tablist:TabListForm;
  TabLists:TabListForm[];
  selectedList:TabListForm;
  
  constructor( private commonService: CommonService ) { }

  ngOnInit() {
    this.getTabLists();
  }
  
  OnSelect(tablist): void {
    this.selectedList = tablist;
  }

  getTabLists(): void {
    this.commonService.getTabLists().subscribe(TabLists => this.TabLists = TabLists);
  }
}
