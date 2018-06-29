import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { Routing } from '../app.routing';

import { LandingPageComponent } from './landing/landing.component';
import { UserReducer } from '../user/user.reducers';

@NgModule({
    declarations: [
      LandingPageComponent
    ],
    imports: [
      BrowserModule,
      Routing,
      StoreModule.forFeature('user', UserReducer),
      AngularMaterialModule
    ],
    providers: [],
})
export class CostumerModule { }
