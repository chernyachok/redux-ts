import * as React from 'react';
import { HandleReceiveInitialUsers } from 'store/actions';
import { UserObj } from 'store/reducers';

interface UserProps {
  users: Array<UserObj>;
  receiveInitialUsers: () => HandleReceiveInitialUsers;
}

class Users extends React.Component<UserProps, {}> {

  componentDidMount() {
    setTimeout(() => {
      this.props.receiveInitialUsers();
    },1000);
  }

  render() {
    const initialUsers = this.props.users.length &&
      this.props.users.map(item => (
        <ul>
          <li>{ item.id }</li>
          <li>{ item.title }</li>
          <li>{ item.body }</li>
    
        </ul>
      ));
    return (
     <div className="container">
       <div className="title">
        User component
      </div>
      <div className="users">
        {
          initialUsers
        }
      </div>
     </div>
    );
  }
}

export default Users;
