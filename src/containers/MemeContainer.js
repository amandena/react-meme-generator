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

  handleSizeChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return(
      <div className='meme-container'>
        <MemeCard/>
        <UploadForm/>
        <SettingsContainer handleSizeChange={this.handleSizeChange} size={this.state.size} color={this.state.color} font={this.state.font}/>
      </div>
    )
  }
}

export default MemeContainer