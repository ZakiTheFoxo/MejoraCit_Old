import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReportarProblemaComponent } from './reportar-problema/reportar-problema.component';
import { ReportarNuevoProblemaComponent } from './reportar-nuevo-problema/reportar-nuevo-problema.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ReportarFinalComponent } from './reportar-final/reportar-final.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TopBarComponent,
    CaseDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ReportarProblemaComponent,
    ReportarNuevoProblemaComponent,
    SplashScreenComponent,
    ReportarFinalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: 'reportes/:id', component: CaseDetailsComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
