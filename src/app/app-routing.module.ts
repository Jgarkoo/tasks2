import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormComponent } from './form/form.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

const routes: Routes = [
  {
    path: 'event-binding',
    component: EventBindingComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'twoway-binding',
    component: TwowayBindingComponent
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

