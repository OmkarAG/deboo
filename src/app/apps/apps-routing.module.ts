import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


import { FullComponent } from './layout/full/full.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AwardsComponent } from './awards/awards.component';
import { TopupComponent } from './topup/topup.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { LocationsComponent } from './locations/locations.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path:'',component:HomeComponent},
      { path: 'blog', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'awards', component: AwardsComponent },
      { path: 'topup', component: TopupComponent },
      { path: 'media', component: MediaComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'locations', component: LocationsComponent },
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
