import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 /* { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: NavComponent },
  { path: 'DarwinR', component: DarwinRComponent }*/
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
