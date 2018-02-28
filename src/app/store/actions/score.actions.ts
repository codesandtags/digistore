// Action Constants
// TODO #4 Add the action to add score here
import { Action } from '@ngrx/store';
import { ScoreState } from '../reducers/score.reducer';

export const RESET_SCORE = '[Score] Setting the score to 0';
export const ADD_SCORE = '[Score] Adding score in 1 point';

// Action Creators
// TODO #5 Implement action creators to add the score here
export class ResetScore implements Action {
  readonly type = RESET_SCORE;
}

export class AddScore implements Action {
  readonly type = ADD_SCORE;
  constructor(public payload: ScoreState) { }
}

// Action Types
// TODO #6 Implement action types remaining here. Do not forget export your things.
export type ScoreActions = ResetScore | AddScore;
