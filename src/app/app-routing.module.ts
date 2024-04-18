// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent},
  { path: 'education', component: EducationComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  // { path: '', redirectTo: '/education', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }