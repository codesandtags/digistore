import { Action } from '@ngrx/store';
import { ScoreState } from '../reducers/score.reducer';

// Action Constants
export const ADD_SCORE = '[Score] Add score';
export const RESET_SCORE = '[Score] Setting the score to 0';

// Action Creators
export class ResetScore implements Action {
  readonly type = RESET_SCORE;
}

export class AddScore implements Action {
  readonly type = ADD_SCORE;
  constructor(public payload: ScoreState) {

  }
}

// Action Types
export type ScoreActions = ResetScore | AddScore;
