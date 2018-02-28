import * as fromAttempts from '../actions/attempts.actions';

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
  // DONE #7 : Implement the reducer for the actions created

  switch (action.type) {
    case fromAttempts.RESET_ATTEMPTS:
      return {
        attempts: []
      };
    case fromAttempts.ADD_ATTEMPT:
      return {
        attempts: [...state.attempts, action.payload]
      };
    default:
      return state;
  }
}
