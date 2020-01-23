import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { OfficeContactComponent } from './office-contact/office-contact.component';


const routes: Routes = [

 
  {path:"",  component:HomeComponent},
  {path:"Home", component:HomeComponent},
  {
    path:"Contact", 
    component: ContactComponent, 
    children : [
      {path :"" ,component : HomeContactComponent},
      {path :"homeAddress" ,component : HomeContactComponent},
      {path :"officeAddress" ,component : OfficeContactComponent}
    ]
  
  },
  {path:"About", component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
