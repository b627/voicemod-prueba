import { RouterModule, Routes } from "@angular/router";
import { MainViewComponent } from './main-view.component';

export const routes: Routes = [{
    path: '',
    component: MainViewComponent
}];

export const mainViewRouting = RouterModule.forChild(routes);