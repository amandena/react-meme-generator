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

  render() {
    return(
      <div className='upload'>
        <form onSubmit={this.handleSubmit}>
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