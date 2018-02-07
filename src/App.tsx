import * as React from 'react';
import './App.css';

import { get } from 'lodash';
import * as moment from 'moment';
import { Base64 } from 'js-base64';

// tslint:disable-next-line:no-console
console.log('get: ', get);
// tslint:disable-next-line:no-console
console.log('moment: ', moment().format('MMMM Do YYYY, h:mm:ss a'));

const a = Base64.encode('a');
// tslint:disable-next-line:no-console
console.log('a: ', a);

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
