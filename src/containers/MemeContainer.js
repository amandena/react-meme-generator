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
        font: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        textColor: 'white',
        topText: '',
        bottomText: '',
        image: ''
      }
    }
  }

  handleDownload = () => {
    const svg = document.getElementById('svg')
    const canvas = document.createElement('canvas')
    const { width, height } = svg.getBBox()
    
    let clonedSvg = svg.cloneNode(true)

    let outerHTML = clonedSvg.outerHTML, 
      blob = new Blob([outerHTML],{type:'image/svg+xml;charset=utf-8'})
    let URL = window.URL || window.webkitURL || window
    let blobURL = URL.createObjectURL(blob)
    
    let image = new Image()
    image.onload = () => {
      canvas.width = width
      canvas.height = height
      let context = canvas.getContext('2d')
      // draw image in canvas starting left-0 , top - 0  
      context.drawImage(image, 0, 0, width, height )
      //  downloadImage(canvas); need to implement
    }
    image.src = blobURL

    let png = canvas.toDataURL('image/png')

    const download = function(href, name){
      let link = document.createElement('a')
      link.download = name
      link.style.opacity = "0"
      // document.append(link)
      link.href = href
      link.click()
      link.remove()
    }
    download(png, "meme.png")
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
          handleDownload={this.handleDownload}
          topText={this.state.meme.topText}
          bottomText={this.state.meme.bottomText}
        />
      </div>
    )
  }
}

export default MemeContainer