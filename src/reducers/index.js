import { combineReducers } from 'redux';
import { reducerService } from './service';
import { reducerLeadership } from './leadership';
import { reducerGeneral } from './general';

const rootReducer = combineReducers({
  general: reducerGeneral,
  service: reducerService,
  leadership: reducerLeadership
});

export default rootReducer;
