import * as fromScore from '../actions/score.actions';

// Interface
export interface ScoreState {
  scoreValue: number;
}

// Initial state definition
// DONE #9 : Fix the initial state
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
  // DONE #8 : Implement the Add Score

  switch (action.type) {
    case fromScore.RESET_SCORE:
      return {
        scoreValue: 0
      };
    case fromScore.INCREMENT_SCORE:
      return {
        scoreValue: state.scoreValue + 1
      };

    default:
      return state;
  }
}
