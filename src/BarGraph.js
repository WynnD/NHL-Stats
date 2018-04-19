import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BarGraph extends Component {
  constructor (props) {
    super(props)
    this.data = props.data
    this.dataX = this.data.map((e) => e.name)
    this.dataY = this.data.map((e) => e.value)
    this.max = Math.max(this.dataY)
    this.demarks = this.getDemarks()
  }

  render () {
    return (
      <ul className="bar-graph">
        {this.data}
      </ul>
    )
  }
}

BarGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.value,
    values: PropTypes.arrayOf(PropTypes.number)
  })).isRequired
}
