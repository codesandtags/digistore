// Action Constants

// DONE #1 : Define the ADD_ATTEMPT and RESET_ATTEMPT actions
import {Attempt} from '../reducers/attempts.reducer';

export const RESET_ATTEMPTS = '[Attempts] Reset Attempts';
export const ADD_ATTEMPT = '[Attempts] Add attempt';

// Action Creators
// DONE #2 : Define the AddAttempt and ResetAttempts implementing the Action (@ngrx/store) interface
export class ResetAttempts {
    readonly type = RESET_ATTEMPTS;
}

export class AddAttempts {
  readonly type = ADD_ATTEMPT;
  constructor(public payload: Attempt) {}
}

// Action Types
// DONE #3: Complete types for the Attempts Actions
export type AttemptsActions = ResetAttempts | AddAttempts;
