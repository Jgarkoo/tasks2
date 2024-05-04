import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormComponent } from './form/form.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    FormComponent,
    TwowayBindingComponent,
    PropertyBindingComponent,
    InterpolationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




