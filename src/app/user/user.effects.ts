import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap, debounceTime } from 'rxjs/operators';

import { UserService } from '../core/services/user.service';
import {
    UserActionTypes,
    SignInAction,
    SignInSuccessAction,
    SignInErrorAction,
    SignUpAction,
    SignUpSuccessAction,
    SignUpErrorAction,
    AuthenticateAction,
    AuthenticateSuccessAction
} from './user.actions';

@Injectable()
export class UserEffects {

    constructor(
        private actions: Actions,
        private userService: UserService,
        private router: Router
    ) { }

    @Effect()
    SignIn: Observable<any> = this.actions
        .ofType(UserActionTypes.SIGN_IN)
        .pipe(
            debounceTime(1000),
            map((action: SignInAction) => {
                return action.payload;
            }),
            switchMap(payload => {
                return this.userService
                    .signIn(payload.email, payload.password)
                    .pipe(
                        map(user => {
                            return new SignInSuccessAction({
                                token: user.token,
                            });
                        }),
                        catchError(error => {
                            console.log(error.error);
                            return of(new SignInErrorAction({
                                error: error.error.message
                            }));
                        })
                    );
            })
        );

    @Effect({ dispatch: false })
    SignInSuccess: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.SIGN_IN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.token);
            this.router.navigateByUrl('/home');
        })
    );

    @Effect({ dispatch: false })
    SignInFailure: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.SIGN_IN_ERROR)
    );

    @Effect()
    SignUp: Observable<any> = this.actions
        .ofType(UserActionTypes.SIGN_UP)
        .pipe(
            debounceTime(1000),
            map((action: SignUpAction) => {
                return action.payload;
            }),
            switchMap(payload => {
                return this.userService
                    .signUp(payload.email, payload.password, payload.firstName, payload.lastName)
                    .pipe(
                        map(user => {
                            return new SignUpSuccessAction({
                                token: user.token,
                            });
                        }),
                        catchError(error => {
                            console.log(error.error);
                            return of(new SignInErrorAction({
                                error: error.error.message
                            }));
                        })
                    );
            })
        );
    @Effect({ dispatch: false })
    SignUpSuccess: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.SIGN_UP_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.token);
            this.router.navigateByUrl('/home');
        })
    );

    @Effect({ dispatch: false })
    SignUpFailure: Observable<any> = this.actions.pipe(
        ofType(UserActionTypes.SIGN_UP_ERROR)
    );

    @Effect()
    Authenticate: Observable<any> = this.actions
        .ofType(UserActionTypes.AUTHENTICATE)
        .pipe(
            map((action: AuthenticateAction) => {
                return action.payload;
            }),
            switchMap(payload => {
                return this.userService
                    .authenticate(payload)
                    .pipe(
                        map(user => {
                            console.log(user);
                            return new AuthenticateSuccessAction({
                                email: user.user.email,
                                firstName: user.user.firstName,
                                lastName: user.user.lastName,
                            });
                        }),
                        catchError(error => {
                            console.log(error.error);
                            return of(new SignInErrorAction({
                                error: error.error.message
                            }));
                        })
                    );
            })
        );
}


