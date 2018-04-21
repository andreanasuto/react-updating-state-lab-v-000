// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super()
    this.state = {
        errors: [],
        user: null,
        settings: {
           bitrate: 8,
           video: {
             resolution: '1080p'
           }
        }
       }

    handleClickRate = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    }
  }

  render () {
    return (
      <button className="bitrate" onClick={this.handleClickRate}> </button>
    )
  }
}
