import React, { Component } from 'react'
import logo from './logo.svg'
import * as d3 from 'd3'
import './App.css'

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
        <div className='chart'>
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.barGraph()
  }

  barGraph () {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const scale = d3.scaleLinear().domain([0, 10]).range([0, 1])
    const chart = d3.select('.chart')
    const bars = chart.selectAll('.bar')
    const barUpdate = bars.data(array)
    const barEnter = barUpdate.enter().append('div')
      .attr('class', 'bar')
      .style('width', d => scale(d) * 100 + '%')
      .style('background-color', d => `rgb(255, ${Math.floor(255 * scale(d))}, 255)`)
      .style('text-align', 'right')
      .text(d => d)
  }
}

export default App
