import { Attempt } from './../reducers/attempts.reducer';
import { Action } from '@ngrx/store';
// Action Constants

// DONE #1 : Define the ADD_ATTEMPT and RESET_ATTEMPT actions
export const ADD_ATTEMPT = '[Attempts] Add Attempt';
export const RESET_ATTEMPTS = '[Attempts] Reset Attempts';

// Action Creators
// DONE #2 : Define the AddAttempt and ResetAttempts implementing the Action (@ngrx/store) interface
export class AddAttempt implements Action {
    readonly type = ADD_ATTEMPT;
    constructor(public payload: Attempt) {}
}

export class ResetAttempts implements Action {
    readonly type = RESET_ATTEMPTS;
}

// Action Types
// DONE #3: Complete types for the Attempts Actions
export type AttemptsActions = ResetAttempts | AddAttempt;
