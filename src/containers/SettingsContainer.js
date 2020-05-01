import React from 'react'

class SettingsContainer extends React.Component {
  render() {
    return(
      <div className='settings'>
        <label>OUTPUT SIZE</label><br/>
          <button>1:1</button>
          <button>3:4</button>
          <button>4:3</button>
          <button>3:5</button>
          <button>5:3</button>

        <br/><br/>

        <label>BACKGROUND COLOR</label><br/>
          <button>BLACK</button>
          <button>BLUE</button>
          <button>GREEN</button>
          <button>YELLOW</button>
          <button>WHITE</button>

        <br/><br/>

        <label>FONT</label><br/>
          <button>BOLD</button>
          <button>CURSIVE</button>
          <button>SERIF</button>
          <button>SANS-SERIF</button>
          <button>WHIMSY</button>
      </div>
    )
  }
}

export default SettingsContainer