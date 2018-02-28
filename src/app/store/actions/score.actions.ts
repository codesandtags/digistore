// Action Constants
// DONE #4 Add the action to add score here
import { Action } from '@ngrx/store';

export const RESET_SCORE = '[Score] Setting the score to 0';
export const INCREMENT_SCORE = '[Score] Incrementing score';

// Action Creators
// DONE #5 Implement action creators to add the score here
export class ResetScore implements Action {
  readonly type = RESET_SCORE;
}

export class IncrementScore implements Action {
  readonly type = INCREMENT_SCORE;
}

// Action Types
// DONE #6 Implement action types remaining here. Do not forget export your things.
export type ScoreActions = ResetScore | IncrementScore;
