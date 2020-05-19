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
        textColor: 'black',
        topText: '',
        bottomText: '',
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

  handleTextChange = event => {
    this.setState({
      meme: {
        ...this.state.meme,
        [event.target.name]: event.target.value
      }
    })
  }

  handleTextColorChange = event => {
    this.setState({
      meme: {
        ...this.state.meme,
        textColor: event.target.value
      }
    })
  }

  handleColorChange = event => {
    this.setState({
      meme: {
        ...this.state.meme,
        color: event.target.value
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
          handleColorChange={this.handleColorChange}
          handleTextChange={this.handleTextChange}
          handleTextColorChange={this.handleTextColorChange}
          handleSizeChange={this.handleSizeChange} 
          size={this.state.meme.size} 
          color={this.state.meme.color} 
          font={this.state.meme.font}
          topText={this.state.meme.topText}
          bottomText={this.state.meme.bottomText}
        />
      </div>
    )
  }
}

export default MemeContainer