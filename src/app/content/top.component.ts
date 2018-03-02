import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  company = "KOSYAS";
  product = "CSIMS";
  img_url = "http://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/100px-Albert_Einstein_%28Nobel%29.png";
  constructor() { }

  ngOnInit() {
  }

  // 사용자별 image data 명을 설정하여 웹서버에 저장된 경로를 img_url 속성값을 변경시켜준다.
  popupmenu () {
    var status = document.getElementById('popup').style.display;
    if (status == "none")
    {
            document.getElementById('popup').style.display='block';
    } else {
            document.getElementById('popup').style.display='none';
    }
  }
}
