import { ActionTypeKeys, ServicesActionTypes } from './actionTypes';
import { combineReducers } from 'redux';
import { StoreState } from '../StoreState';
export interface UserObj {
  id: number;
  title: string;
  body: string;
}

export interface InitState {
  users: Array<UserObj>;
}

const initState: InitState = {
  users: []
};

const reducer = (state = initState, action: ServicesActionTypes) => {

  if (action.type === ActionTypeKeys.RECEIVE_INITIAL_USERS_FULFILLED) {
      let users = [];
      users.push(action.payload.data);
      return {
        ...state,
        users
      };
  }
  return state;
};

export default combineReducers<StoreState>({
  reducer: reducer
});
