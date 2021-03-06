import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'start', loadChildren: './start/start.module#StartPageModule' },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' },
  { path: 'update', loadChildren: './update/update.module#UpdatePageModule' },
  { path: 'view', loadChildren: './view/view.module#ViewPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
