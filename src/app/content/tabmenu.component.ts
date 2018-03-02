import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.css']
})
export class TabmenuComponent implements OnInit {
  tab_menu='{"tab_menu":"["DashBoard", "Analysis", "Configuration", "Report", "intelligence"]"}';
  tab_menu1='DashBoard';
  tab_menu2='Analysis';
  tab_menu3='Configuration';
  tab_menu4='Report';
  tab_menu5='intelligence';
  
  constructor() { }

  ngOnInit() {
  }
  
}
