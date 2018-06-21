import { BrowserModule, makeStateKey } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/demo.interceptor';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DemoServiceService } from './demoService/demo-service.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesReserveComponent } from './vehicles-reserve/vehicles-reserve.component'
import { ProfileComponent } from './profile/profile.component';
import { IsSomeLogged } from './guard/auth.logged';
import { IsAdmin } from './guard/auth.admin';
import { IsManager } from './guard/auth.manager';
import { IsClient } from './guard/auth.client';
import { MakeServiceComponent } from './make-service/make-service.component';
import { BranchOfficeComponent } from './branch-office/branch-office.component';
import { MakeBranchComponent } from './make-branch/make-branch.component';
import { MakeVehicleComponent } from './make-vehicle/make-vehicle.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const ChildRoutes =
  [
    {
      path: "vehicles-reserve",
      component: VehiclesReserveComponent
    },
  ]

const Routes= [
  {
    path: "login",
    component: LoginComponent,
    //canActivate: [IsSomeLogged]
  },

  {
    path: "register",
    component: RegisterComponent,
    
  },

  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "services",
    component: ServicesComponent
  },

  {
    path: "services/:Id",
    component: VehiclesComponent,
    children: ChildRoutes
  },

  {
    path: "branches/:Id",
    component: BranchOfficeComponent
  },

  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [IsSomeLogged]
  },

  {
    path: "make-service",
    component: MakeServiceComponent,
    canActivate: [IsManager]
  },

  {
    path: "make-branch/:Id",
    component: MakeBranchComponent,
    canActivate: [IsManager]
  },
  {
    path: "make-vehicle/:Id",
    component: MakeVehicleComponent,
    canActivate: [IsManager]
  },
  {
    path: "edit-service/:Id",
    component: EditServiceComponent,
    canActivate: [IsManager]
  },
  {
<<<<<<< HEAD
    path: "edit-profile",
    component: EditProfileComponent
=======
  path: "edit-profile",
    component: EditProfileComponent,
    canActivate: [IsSomeLogged]
  },
  {
    path: "edit-branch/:Id",
      component: EditBranchComponent,
      canActivate: [IsManager]
  },
  {
    path: "edit-vehicle/:Id",
      component: EditVehicleComponent,
      canActivate: [IsManager]
>>>>>>> 5110d1dbb970d41ce28499b838be08c48eae03fb
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    VehiclesComponent,
    ProfileComponent,
    VehiclesReserveComponent,
    MakeServiceComponent,
    BranchOfficeComponent,
    MakeBranchComponent,
    MakeVehicleComponent,
    EditServiceComponent,
<<<<<<< HEAD
    EditProfileComponent
    ],
=======
    EditProfileComponent,
    EditBranchComponent,
    EditVehicleComponent
      ],
>>>>>>> 5110d1dbb970d41ce28499b838be08c48eae03fb
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
        HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDnihJyw_34z5S1KZXp90pfTGAqhFszNJk'})
  ],
  providers: [
    DemoServiceService,
    IsAdmin,
    IsManager,
    IsClient,
    IsSomeLogged,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: 'IsSomeLogged',
      useValue: () => {
        return true;
      } 
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
