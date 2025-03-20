import { Action } from '@ngrx/store';
import { Attempt } from '../reducers/attempts.reducer';

// Action Constants

// TODO #1 : Define the ADD_ATTEMPT and RESET_ATTEMPT actions
export const RESET_ATTEMPTS = '[Attempts] Reset Attempts';
export const ADD_ATTEMPT = '[Attempts] Add Attempts';

// Action Creators
// TODO #2 : Define the AddAttempt and ResetAttempts implementing the Action (@ngrx/store) interface
export class ResetAttempts implements Action {
    readonly type = RESET_ATTEMPTS;
}

export class AddAttempt implements Action {
    constructor(public payload: Attempt){

    }
    readonly type = ADD_ATTEMPT;
}

// Action Types
// TODO #3: Complete types for the Attempts Actions
export type AttemptsActions = ResetAttempts | AddAttempt;
