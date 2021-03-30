import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  {path:"nav",component:NavComponent},
  {path:"home",component:HomeComponent},
  {path:"quiz",component:QuizComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
