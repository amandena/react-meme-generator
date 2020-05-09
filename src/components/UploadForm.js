import React from 'react'

class UploadForm extends React.Component {
  constructor() {
    super()
    this.state = {
      uploadForm: {
        image_url: ''
      }
    }
  }

  handleChange = event => {
    this.setState({
      uploadForm: {
        ...this.state.uploadForm,
        [event.target.name]: event.target.value
      }
    })
  }

  resetState = () => {
    this.setState({
      uploadForm: {
        image_url: ''
      }
    })
  }

  render() {
    return(
      <div className='upload'>
        <form onSubmit={(event) => {
          this.props.handleUpload(event, this.state.uploadForm)
          this.resetState()
        }}
        >
          <h3>Upload an Image:</h3>

          <input 
            type='text' 
            placeholder='image_url' 
            name='image_url' 
            value={this.state.uploadForm.image_url} 
            onChange={this.handleChange}
          />

          <br/><br/>

          <input 
            type='submit' 
            value='Upload'
          />
        </form>
      </div>
    )
  }
}

export default UploadForm