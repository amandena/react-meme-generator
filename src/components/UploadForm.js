import React from 'react'

class UploadForm extends React.Component {
  render() {
    return(
      <div className='upload'>
        <form>
          <label>Upload an Image: </label>
          <input type='text' placeholder='image_url'></input>
  
          <input type='submit' value='Upload'/>
        </form>
      </div>
    )
  }
}

export default UploadForm