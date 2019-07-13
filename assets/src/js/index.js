import React from 'react';
import ReactDOM from 'react-dom';
import Transactions from './transactions/Transactions.screen';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1> Puta queo pariu Django + React + Webpack + Babel = Awesome
            App
                </h1>
                <Transactions />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'));
