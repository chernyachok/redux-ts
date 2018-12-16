import { getInitialUsers } from './api';
import { ReceiveUsersAction, ActionTypeKeys } from '../reducers/actionTypes';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from '../StoreState';

export type Thunk<R> = ThunkAction<R, StoreState, null>;

export type HandleReceiveInitialUsers = () => Thunk<void>;

export const receiveInitialUsers = (): ReceiveUsersAction => ({
  type: ActionTypeKeys.RECEIVE_INITIAL_USERS,
  payload: getInitialUsers()
});

export const handleReceiveInitialUsers: HandleReceiveInitialUsers = () =>
  async dispatch => {
    await dispatch(receiveInitialUsers());
    return Promise.resolve();
  };