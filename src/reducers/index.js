import { combineReducers } from 'redux';
import photos from './PhotoReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  ajaxCallsInProgress,
  photos,
});

export default rootReducer;
