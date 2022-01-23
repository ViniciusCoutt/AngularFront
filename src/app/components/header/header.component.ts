import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categoryIsActive: boolean = false;
  platformIsActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  categoryClick(){
    this.categoryIsActive = !this.categoryIsActive
  }

  platformClick(){
    this.platformIsActive = !this.platformIsActive

  }

}
