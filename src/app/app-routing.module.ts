import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReportarProblemaComponent } from './reportar-problema/reportar-problema.component';
import { ReportarNuevoProblemaComponent } from './reportar-nuevo-problema/reportar-nuevo-problema.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ReportarFinalComponent } from './reportar-final/reportar-final.component';
import { CaseDetailsComponent } from './case-details/case-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component:SplashScreenComponent},
  { path: 'home', component:MainPageComponent },
  { path: 'login', component:LoginComponent},
  { path: 'reportes/:id', component:CaseDetailsComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'report', component:ReportarProblemaComponent},
  { path: 'reportnew', component:ReportarNuevoProblemaComponent},
  { path: 'reportfinal', component:ReportarFinalComponent},
  { path: '**', redirectTo:'/splash'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
