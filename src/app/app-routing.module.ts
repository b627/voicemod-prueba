import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path: '', 
  redirectTo: 'main-view',
  pathMatch: 'full'
},
{
  path: 'main-view',
  loadChildren: './main-view/main-view.module#MainViewModule'
},
{
  path: '**',
  redirectTo: 'main-view'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
