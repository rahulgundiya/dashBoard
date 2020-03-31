import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { ControloptionComponent } from './controloption/controloption.component';


const routes: Routes = [{path:'control' ,component:ControlComponent}
,
{path:'controloption' , component:ControloptionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
