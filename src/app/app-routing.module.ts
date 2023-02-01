import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloghomeComponent } from './blog/bloghome/bloghome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SaleshomeComponent } from './sales/saleshome/saleshome.component';
import { DisplayfeedbackComponent } from './testimonial/displayfeedback/displayfeedback.component';

const routes: Routes = [
  {
    path:'', children:[
      {
        path: '', component: DisplayfeedbackComponent
      },
      {
        path: 'sales', component: SaleshomeComponent
      },
      {
        path: 'blog', component: BloghomeComponent
      }
    ],
    component:HomepageComponent
  },
  
  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
