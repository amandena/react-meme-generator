import React from 'react'
import SettingsContainer from './SettingsContainer'
import MemeCard from '../components/MemeCard'
import UploadForm from '../components/UploadForm'

class MemeContainer extends React.Component {
  render() {
    return(
      <div>
        MemeContainer
        <MemeCard/>
        <UploadForm/>
        <SettingsContainer/>
      </div>
    )
  }
}

export default MemeContainer