import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css']
})
export class BannerNavigationComponent implements OnInit {

  logoutStatus = true;
  isShown=true;
  collaps:any=true;

  doStuffOnClick() {
  
    this.isShown = !this.isShown;
    if( this.isShown){
      this.collaps=false;
    }
  }

 


  constructor() { 

  }



 
  ngOnInit(): void {
  }
}
