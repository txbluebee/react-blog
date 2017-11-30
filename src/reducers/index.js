import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'; 
import AuthReducer from './auth_reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReducer,
  authenticated: AuthReducer,
  form: formReducer
});

export default rootReducer;
