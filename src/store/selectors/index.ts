import { StoreState } from '../StoreState';
import { UserObj } from '../reducers';

type SelectInitialUsers = UserObj[];

export const selectInitialUsers = (state: StoreState): SelectInitialUsers => state.reducer.users;