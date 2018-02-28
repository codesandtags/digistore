import * as fromUi from './ui.reducer';
import * as fromAttempts from './attempts.reducer';
import * as fromScore from './score.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AttemptsActions } from '../actions/attempts.actions';
import { ScoreActions } from '../actions/score.actions';
// TODO #15: Fix the code in order to add the attempts and score state and reducers to the application
/**
 * Definition of the Application State
 */
export interface ApplicationState {
  ui: fromUi.UiState;
  attempts: fromAttempts.AttemptsState;
  score: fromScore.ScoreState;
}

/**
 * Definition of the reducers mapped by the application
 * @type {{attempts: (state: fromAttempts.AttemptsState, action: AttemptsActions) => fromAttempts.AttemptsState}}
 * @type {{score: (state: fromScore.ScoreState, action: ScoreActions) => fromScore.ScoreState}}
 */
export const reducers: ActionReducerMap<ApplicationState> = {
  ui: fromUi.reducer,
  attempts: (state, action: AttemptsActions) => fromAttempts.reducer(state, action),
  score: (state, action: ScoreActions) => fromScore.reducer(state, action)
};
