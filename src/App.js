import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
});

class App extends Component {

  constructor() {
    super();
    songData.forEach((song) => {
      song.state = {
        favorite: false,
      };
    })
  }

  onItemChecked = () => {
    this.setState({favorite: true})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={songData} checkedCallback={this.onItemChecked}/>
        </main>
      </div>
    );
  }
}

export default App;
