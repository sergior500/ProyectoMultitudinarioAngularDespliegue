import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [

  { 
  path: '', 
  component: HomeComponent
 },
  { 
    path: 'user', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  }, 
  { 
    path: 'articles', loadChildren: () => import('./modules/articles/articles.module').then(m => m.ArticlesModule)
},
{ 
  path: 'categorys', loadChildren: () => import('./modules/categorys/categorys.module').then(m => m.CategorysModule) ,canActivate: [AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
