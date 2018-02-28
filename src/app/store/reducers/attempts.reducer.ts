import * as fromAttempts from '../actions/attempts.actions';
import { ADD_ATTEMPT, RESET_ATTEMPT } from '../index';

// Interface
export interface Attempt {
  control: string;
  isSuccess: boolean;
  icon?: string;
}

export interface AttemptsState {
  attempts: Attempt[];
}

// Initial State Definition
export const initialState: AttemptsState = {
  attempts: []
};

/**
 * Reducer to handle the attempts by the user in the game
 * @param {AttemptsState} state
 * @param {AttemptsActions} action
 * @returns {AttemptsState}
 */
export function reducer(state = initialState, action: fromAttempts.AttemptsActions): AttemptsState {
  switch(action.type) {
    case ADD_ATTEMPT:
      let newAttempts = Object.assign([], state.attempts);
      newAttempts.push({});
    case RESET_ATTEMPT:
      return initialState;
  }
  // TODO #7 : Implement the reducer for the actions created
  return state;
}
