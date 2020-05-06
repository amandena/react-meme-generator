import React from 'react'
import SettingsContainer from './SettingsContainer'
import MemeCard from '../components/MemeCard'
import UploadForm from '../components/UploadForm'

class MemeContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      size: '3:4',
      color: 'black',
      font: 'bold'
    }
  }
  
  render() {
    return(
      <div className='meme-container'>
        <h1>Make a Meme</h1>
        <MemeCard/>
        <UploadForm/>
        <SettingsContainer size={this.state.size} color={this.state.color} font={this.state.font}/>
      </div>
    )
  }
}

export default MemeContainer