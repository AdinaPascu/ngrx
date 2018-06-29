import { UserActionTypes, All } from './user.actions';
import { User } from '../core/models/user.model';

export interface State {
    loading: boolean;
    authenticated: boolean;
    userData: User | null;
    errorMessage: string | null;
}

export const initialState: State = {
    loading: false,
    authenticated: false,
    userData: null,
    errorMessage: null
};

export function UserReducer(state = initialState, action: All): State {
    switch (action.type) {
        case UserActionTypes.SIGN_IN: {
            return {
                ...state,
                loading: true,
                authenticated: false,
                userData: null,
                errorMessage: null

            };
        }
        case UserActionTypes.SIGN_IN_SUCCESS: {
            return {
                ...state,
                loading: false,
                authenticated: true,
                userData: {
                    token: action.payload.token,
                },
                errorMessage: null
            };
        }
        case UserActionTypes.SIGN_IN_ERROR: {
            return {
                ...state,
                authenticated: false,
                loading: false,
                userData: null,
                errorMessage: action.payload.error
            };
        }
        case UserActionTypes.SIGN_UP: {
            return {
                ...state,
                authenticated: false,
                loading: true,
                userData: null,
                errorMessage: null

            };
        }
        case UserActionTypes.SIGN_UP_SUCCESS: {
            console.log(' action', action.payload);
            return {
                ...state,
                authenticated: true,
                loading: false,
                userData: {
                    token: action.payload.token,
                },
                errorMessage: null
            };
        }
        case UserActionTypes.SIGN_UP_ERROR: {
            return {
                ...state,
                authenticated: false,
                loading: false,
                userData: null,
                errorMessage: action.payload.error
            };
        }
        case UserActionTypes.AUTHENTICATE: {
            return {
                ...state,
                authenticated: false,
                loading: true,
                userData: null,
                errorMessage: null
            };
        }
        case UserActionTypes.AUTHENTICATE_SUCCESS: {
            console.log(action);
            return {
                ...state,
                authenticated: true,
                loading: false,
                userData: {
                    email: action.payload.email,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName
                }
            };
        }
        case UserActionTypes.AUTHENTICATE_ERROR: {
            return {
                ...state,
                authenticated: false,
                loading: false,
                userData: null,
                errorMessage: action.payload.error
            };
        }
        case UserActionTypes.SIGN_OUT: {
            return {
                ...state,
                authenticated: false,
                loading: false,
                userData: null,
                errorMessage: null
            };
        }
        default: {
            return state;
        }
    }
}
