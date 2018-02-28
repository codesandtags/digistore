import * as fromScore from '../actions/score.actions';
import {ADD_SCORE} from '../actions';

// Interface
export interface ScoreState {
  scoreValue: number;
}

// Initial state definition
// TODO #9 : Fix the initial state
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
  // TODO #8 : Implement the Add Score

  switch (action.type) {
    case fromScore.RESET_SCORE:
      return {
        scoreValue: 0
      };
    case fromScore.ADD_SCORE:
      return {
        scoreValue: state.scoreValue + action.points
      };
    default:
      return state;
  }
}
