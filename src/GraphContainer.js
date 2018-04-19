import React, { Component } from 'react'
import BarGraph from './BarGraph'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class GraphContainer extends Component {
  constructor (props) {
    super(props)
    this.apiUrl = props.apiUrl
  }

  render () {
    return <BarGraph data={ this.data }></BarGraph>
  }

  async componentDidMount () {
    // TODO: Bargraph is rendered before data is received
    this.data = await this.getData()
  }

  async getData () {
    const data = await axios.get(this.apiUrl)
    let graphData = data.data
    graphData = graphData.map((e) => {
      return {
        name: e.name,
        value: e.values[0]
      }
    })

    console.log(graphData)
    return graphData
  }
}

GraphContainer.propTypes = {
  apiUrl: PropTypes.string.isRequired
}
