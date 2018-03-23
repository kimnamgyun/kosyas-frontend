import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis-config1',
  templateUrl: './analysis-config1.component.html',
  styleUrls: ['./analysis-config1.component.css']
})
export class AnalysisConfig1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openCity(evt, roles) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(roles).style.display = "block";
    evt.currentTarget.className += " active";
  }
}
