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

  render() {
    return(
      <div className='upload'>
        <form>
          <h3>Upload an Image:</h3>

          <input type='text' placeholder='image_url'></input>

          <br/><br/>

          <input type='submit' value='Upload'/>
        </form>
      </div>
    )
  }
}

export default UploadForm