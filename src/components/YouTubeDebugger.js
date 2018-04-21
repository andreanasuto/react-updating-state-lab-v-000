// Code YouTubeDebugger Component Here
import React from 'react'
class YouTubeDebugger extends React.Component {
  constructor(props) {
    super()
    this.state = {
      js: { 
        errors: [],
        user: null,
        settings: {
           bitrate: 8,
           video: { resolution: '1080p' }
        }
       }
    }
  }

  render () {
    return (
      <button className="bitrate"> </button>

    )
  }
}
