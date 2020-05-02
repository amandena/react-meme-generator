import React from 'react'

class SettingsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      size: '3:4',
      color: 'black',
      font: 'bold'
    }
  }
  
  render() {
    return(
      <div className='settings'>
        <div className='sizes'>
          <label>OUTPUT SIZE</label><br/>
            <button className='one-by-one'>1:1</button>
            <button className='three-by-four'>3:4</button>
            <button className='four-by-three'>4:3</button>
            <button className='three-by-five'>3:5</button>
            <button className='five-by-three'>5:3</button>
        </div>

        <br/><br/>

        <div className='colors'>
          <label>BACKGROUND COLOR</label><br/>
            <button className='black'>BLACK</button>
            <button className='blue'>BLUE</button>
            <button className='green'>GREEN</button>
            <button className='yellow'>YELLOW</button>
            <button className='white'>WHITE</button>
        </div>

        <br/><br/>

        <div className='fonts'>
          <label>FONT</label><br/>
            <button className='bold'>BOLD</button>
            <button className='cursive'>CURSIVE</button>
            <button className='serif'>SERIF</button>
            <button className='sans-serif'>SANS-SERIF</button>
            <button className='whimsy'>WHIMSY</button>
        </div>

        <br/><br/>

        <button className='save'>Save Changes</button>
      </div>
    )
  }
}

export default SettingsContainer