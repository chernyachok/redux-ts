import * as React from 'react';
import { Users } from './containers/Users';

export default class App extends React.Component<{}> {
    render() {
        return (
            <div className="App">
                <Users/>
            </div>
        );
    }
}