import { Action } from '@ngrx/store';
import { Attempt } from '../reducers/attempts.reducer';

// Action Constants
export const RESET_ATTEMPTS = '[Attempts] Reset Attempts';
export const ADD_ATTEMPT = '[Attempts] Add Attempt';

// Action Creators
export class ResetAttempts implements Action {
    readonly type = RESET_ATTEMPTS;
}

export class AddAttempt implements Action {
    readonly type = ADD_ATTEMPT;
    constructor(public payload: Attempt) {

    }
}

// Action Types
export type AttemptsActions = ResetAttempts | AddAttempt;
