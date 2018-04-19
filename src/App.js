import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import GraphContainer from './GraphContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul className='bar-graph'>
          <li className='bar-graph-axis'></li>
        </ul>

        <GraphContainer apiUrl='http://localhost:3000/api/stats/team/postseason/games'></GraphContainer>
      </div>
    )
  }
}

export default App
