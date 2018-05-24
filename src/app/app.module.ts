import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CliftondaleComponent } from './cliftondale/cliftondale.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  {path: 'cliftondale', component: CliftondaleComponent},
  {path: '', component: LandingComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CliftondaleComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
