import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AppMainComponent } from './layout-admin/app.main.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: InicioComponent,     
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        
      }
    ]
  },
  {
    path:'admin',
    component: AppMainComponent,
    canActivate: [AuthGuard],
    children:[{
      path: '',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      canActivate: [AuthGuard]
    }
      
    ]
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
