import React, { Component } from 'react';
//import './../styles.css';
import NewFormContainer from './../containers/newFormContainer';

class App extends Component {
  render() {
    return (

          <div className="wrapper">
            <header>
              <img src={require("../assets/img/money.png")} />
              <div>
                <h4>fixer.io</h4>
                <span>Get historical foreign exchange rates ranging from 2000 to date</span>
              </div>
            </header>
            <NewFormContainer />
          </div>

    );
  }
}

export default App;
