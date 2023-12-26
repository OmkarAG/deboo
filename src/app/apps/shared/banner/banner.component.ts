import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
closeHandler() {
throw new Error('Method not implemented.');
}
  constructor() {}

  isShown = true;

  ngOnInit(): void {}
  logoutStatus = false;
  // isShown:boolean=false;
  collaps = true;

  doStuffOnClick() {
    this.isShown = !this.isShown;
    // if (this.isShown) {
    //   this.collaps = false;
    // }
  }


}
