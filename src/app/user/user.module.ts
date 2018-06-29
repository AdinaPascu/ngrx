import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { Routing } from '../app.routing';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { UserService } from '../core/services/user.service';
import { UserEffects } from './user.effects';
import { UserReducer } from './user.reducers';

@NgModule({
    declarations: [
      SignInComponent,
      SignUpComponent
    ],
    imports: [
      BrowserModule,
      Routing,
      AngularMaterialModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      StoreModule.forFeature('user', UserReducer),
      EffectsModule.forFeature([UserEffects]),
      StoreDevtoolsModule.instrument({
          maxAge: 25
      }),
      HttpClientModule
    ],
    providers: [UserService],
})
export class UserModule { }
