import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import UsersPage from './Users';
import { StoreState } from '../../store/StoreState';
import { handleReceiveInitialUsers } from '../../store/actions';
import { selectInitialUsers } from '../../store/selectors';

const mapStateToProps = (state: StoreState) => ({
  users: selectInitialUsers(state)
});

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => ({
  receiveInitialUsers: () => dispatch(handleReceiveInitialUsers())
});

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersPage);
