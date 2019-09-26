import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { DefinitionComponent } from './component/definition/definition.component';
import { RegisterComponent } from './component/register/register.component';
import { EstatesComponent } from './component/estates/estates.component';
import { EstateDetailComponent } from './component/estate-detail/estate-detail.component';
import { CreateEstateComponent } from './component/create-estate/create-estate.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { TaskComponent } from './component/task/task.component';
import { PlanComponent } from './component/plan/plan.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { CreatePlanComponent } from './component/create-plan/create-plan.component';
import { ControlComponent } from './component/control/control.component';
import { ManagementRolesComponent } from './component/management-roles/management-roles.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PlanDetailsComponent } from './component/plan-details/plan-details.component';


//Control de usuarios
import { AuthGuardService as AuthGuard } from './services/Auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/Auth/role-guard.service';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'pwa', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'estates', component: EstatesComponent },
      { path: 'estates/detail/:id', component: EstateDetailComponent },
      { path: 'estates/create', component: CreateEstateComponent },
      { path: 'definitions', component: DefinitionComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'tasks', component: TaskComponent },
      { path: 'tasks/create', component: CreateTaskComponent },
      { path: 'plans', component: PlanComponent },
      { path: 'plans/create', component: CreatePlanComponent },
      { path: 'control', component: ControlComponent },
      { path: 'roles', component: ManagementRolesComponent },
      { path: 'control/plan-detail/:id', component: PlanDetailsComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'pwa' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
