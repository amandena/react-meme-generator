import React from 'react'
import SettingsContainer from './SettingsContainer'
import MemeCard from '../components/MemeCard'
import UploadForm from '../components/UploadForm'

class MemeContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      meme: {
        color: 'black',
        font: 'Impact',
        textColor: 'white',
        topText: '',
        bottomText: '',
        image: ''
      }
    }
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

  handleChange = event => {
    this.setState({
      meme: {
        ...this.state.meme,
        [event.target.name]: event.target.value
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
          handleChange={this.handleChange}
          handleSizeChange={this.handleSizeChange}   
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