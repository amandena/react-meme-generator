import React from 'react'
import SettingsContainer from './SettingsContainer'
import MemeCard from '../components/MemeCard'
import UploadForm from '../components/UploadForm'

class MemeContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      meme: {
        size: '3:4',
        color: 'black',
        font: 'bold',
        image: ''
      }
    }
  }

  handleSizeChange = event => {
    event.preventDefault()
    this.setState({
      meme: {
        ...this.state.meme,
        size: event.target.value
      }
    })
  }

  handleUpload = (event, uploadForm) => {
    event.preventDefault()
    this.setState({
      meme: {
        ...this.state.meme,
        image: uploadForm.image_url
      }
    })
  }
  
  render() {
    return(
      <div className='meme-container'>
        <MemeCard 
          meme={this.state.meme}
        />
        <UploadForm 
          handleUpload={this.handleUpload}
        />
        <SettingsContainer 
          handleSizeChange={this.handleSizeChange} 
          size={this.state.meme.size} 
          color={this.state.meme.color} 
          font={this.state.meme.font}
        />
      </div>
    )
  }
}

export default MemeContainer