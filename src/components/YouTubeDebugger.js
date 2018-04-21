// Code YouTubeDebugger Component Here
import React from 'react'
class YouTubeDebugger extends React.Component {
  constructor(props) {
    super()
    this.state = {
        errors: [],
        user: null,
        settings: {
           bitrate: 8,
           video: { resolution: '1080p' }
        }
       }

    handleClickRate = () => {
      this.setState(
        settings: Object.assign({}, this.state.js, {
        bitrate: 12
        }),
      )
    }
  }

  render () {
    return (
      <button className="bitrate" onClick="handleClickRate"> </button>

    )
  }
}
