import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { OefeningComponent } from './oefening/oefening.component';
import { WorkOutPlanComponent } from './work-out-plan/work-out-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    //OefeningComponent,
    WorkOutPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
