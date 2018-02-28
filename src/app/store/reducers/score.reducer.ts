import * as fromScore from '../actions/score.actions';

// Interface
export interface ScoreState {
  scoreValue: number;
}

// Initial state definition
export const initialState: ScoreState = {
  scoreValue: 0
};

/**
 * Reducer to handle the scoreValue in the game
 * @param {ScoreState} state
 * @param {ScoreActions} action
 * @returns {ScoreState}
 */
export function reducer(state = initialState, action: fromScore.ScoreActions): ScoreState {

  switch (action.type) {
    case fromScore.RESET_SCORE:
      return initialState;

    case fromScore.ADD_SCORE:
      return {
        scoreValue: state.scoreValue + action.payload.scoreValue
      };

    default:
      return state;
  }
}
