import { Component } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('slide', [
      state('visible', style({ transform: 'translateY(0%)' })),
      state('hidden', style({ transform: 'translateY(-109%)', })),


      transition('visible => hidden', animate('0.4s ease-in-out')),
      transition('hidden => visible', animate('0.4s ease-in-out'))
    ])
  ]
})
export class AboutComponent {


  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;

  }

}
