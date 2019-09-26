import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';

// Servicios
import { ApiService } from './services/api.service';
import { AuthGuardService } from './services/Auth/auth-guard.service';
import { AuthService } from './services/Auth/auth.service';
import { RoleGuardService } from './services/Auth/role-guard.service';
import { StateManagerService } from './services/state-manager.service';

// Material Module
import { MaterialModule } from './material.module';

// Charts
// import { ChartsModule } from 'ng2-charts';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Moment
import { MomentModule } from 'ngx-moment';

// Components
import { HomeComponent } from './component/home/home.component';
import { DefinitionComponent } from './component/definition/definition.component';
import { RegisterComponent } from './component/register/register.component';
import { EstatesComponent } from './component/estates/estates.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { EstateDetailComponent } from './component/estate-detail/estate-detail.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CreateEstateComponent } from './component/create-estate/create-estate.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { TaskComponent } from './component/task/task.component';
import { PlanComponent } from './component/plan/plan.component';
import { CreatePlanComponent } from './component/create-plan/create-plan.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { ControlComponent } from './component/control/control.component';
import { DropzoneDirective } from './directive/dropzone.directive';
import { UploaderComponent } from './component/uploader/uploader.component';
import { UploadTaskComponent } from './component/upload-task/upload-task.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PlanDetailsComponent } from './component/plan-details/plan-details.component';
import { ManagementRolesComponent } from './component/management-roles/management-roles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DefinitionComponent,
    RegisterComponent,
    EstatesComponent,
    DialogComponent,
    EstateDetailComponent,
    CurrencyPipe,
    CreateEstateComponent,
    AboutUsComponent,
    TaskComponent,
    PlanComponent,
    CreatePlanComponent,
    CreateTaskComponent,
    ControlComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    ProfileComponent,
    PlanDetailsComponent,
    ManagementRolesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'n2n-Tech'), // imports firebase/app needed for everything
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    MaterialModule,
    FormsModule,
    MomentModule
  ],
  providers: [
    ApiService,
    AuthGuardService,
    AuthService,
    RoleGuardService,
    StateManagerService
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
