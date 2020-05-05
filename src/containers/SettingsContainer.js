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

  handleSizeChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return(
      <div className='settings'>
        <div className='sizes'>
          <label>OUTPUT SIZE</label><br/>
            <button className='one-by-one' name='1:1' value={console.log(this.state.value)} onClick={this.handleSizeChange}>1:1</button>
            <button className='three-by-four' name='3:4' value={this.state.value} onClick={this.handleSizeChange}>3:4</button>
            <button className='four-by-three' name='4:3' value={this.state.value} onClick={this.handleSizeChange}>4:3</button>
            <button className='three-by-five' name='3:5' value={this.state.value} onClick={this.handleSizeChange}>3:5</button>
            <button className='five-by-three' name='5:3' value={this.state.value} onClick={this.handleSizeChange}>5:3</button>
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