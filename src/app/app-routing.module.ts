import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppController } from './app.controller';
import { HomeComponent } from './core/components/home/home.component';
import { routerConfig } from './core/config/router-config.const';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: AppController.trans().home
    }
  },
  {
    path: routerConfig.notebooks.base,
    loadChildren: () => import('./lazy/notebooks/notebooks.module').then(mod => mod.NotebooksModule),
    data: {
      title: AppController.trans().notebooks
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
