import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/apps/apps.module').then(m => m.AppsModule)
  },

  {path: '**', pathMatch: 'full', redirectTo: 'dashboard/apps' },
  {path: '', pathMatch: 'full', redirectTo: 'dashboard/apps' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
