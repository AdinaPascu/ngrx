import { Action } from '@ngrx/store';

export enum UserActionTypes {
    SIGN_IN = '[User] SignIn',
    SIGN_IN_SUCCESS = '[User] SignInSuccess',
    SIGN_IN_ERROR = '[User] SignInError',
    SIGN_UP = '[User] SignUp',
    SIGN_UP_SUCCESS = '[User] SignUpSuccess',
    SIGN_UP_ERROR = '[User] SignUpError',
    AUTHENTICATE = '[User] Authenticate',
    AUTHENTICATE_SUCCESS = '[User] AuthenticateSuccess',
    AUTHENTICATE_ERROR = '[User] AuthenticateError',
    SIGN_OUT = '[User] SignOut'
}

export class SignInAction implements Action {
    readonly type = UserActionTypes.SIGN_IN;
    constructor(public payload: any) {}
}

export class SignInSuccessAction implements Action {
    readonly type = UserActionTypes.SIGN_IN_SUCCESS;
    constructor(public payload: any) {}
}

export class SignInErrorAction implements Action {
    readonly type = UserActionTypes.SIGN_IN_ERROR;
    constructor(public payload: any) {}
}
export class SignUpAction implements Action {
    readonly type = UserActionTypes.SIGN_UP;
    constructor(public payload: any) {}
}

export class SignUpSuccessAction implements Action {
    readonly type = UserActionTypes.SIGN_UP_SUCCESS;
    constructor(public payload: any) {}
}

export class SignUpErrorAction implements Action {
    readonly type = UserActionTypes.SIGN_UP_ERROR;
    constructor(public payload: any) {}
}

export class AuthenticateAction implements Action {
    readonly type = UserActionTypes.AUTHENTICATE;
    constructor(public payload: any) {}
}

export class AuthenticateSuccessAction implements Action {
    readonly type = UserActionTypes.AUTHENTICATE_SUCCESS;
    constructor(public payload: any) {}
}

export class AuthenticateErrorAction implements Action {
    readonly type = UserActionTypes.AUTHENTICATE_ERROR;
    constructor(public payload: any) {}
}

export class SignOutAction implements Action {
    readonly type = UserActionTypes.SIGN_OUT;
    constructor() {}
}
export type All =
    | SignInAction
    | SignInSuccessAction
    | SignInErrorAction
    | SignUpAction
    | SignUpSuccessAction
    | SignUpErrorAction
    | AuthenticateAction
    | AuthenticateSuccessAction
    | AuthenticateErrorAction
    | SignOutAction;
