// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super()
    this.state = {
      timesClicked: 0
    }

    update = this.setState()
  }

  render () {
    return (
      <button onClick={this.update}> {this.state.timesClicked} </button>
    )
  }
}
