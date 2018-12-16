import { IncomingUsers } from '../actions/types';

export enum ActionTypeKeys {
    RECEIVE_INITIAL_USERS = 'RECEIVE_INITIAL_USERS',
    RECEIVE_INITIAL_USERS_FULFILLED = 'RECEIVE_INITIAL_USERS_FULFILLED',
}

export interface ReceiveUsersAction {
    readonly type: ActionTypeKeys.RECEIVE_INITIAL_USERS;
    readonly payload: Promise<IncomingUsers>;
}

export interface ReceiveUsersFulfilledAction {
    readonly type: ActionTypeKeys.RECEIVE_INITIAL_USERS_FULFILLED;
    readonly payload: IncomingUsers;
}

export type ServicesActionTypes =
    | ReceiveUsersFulfilledAction;
