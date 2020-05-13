import React from 'react'

const SettingsContainer = ({ handleSizeChange, topText, bottomText }) => {

  return(
    <div className='settings'>
      <div className='texts'>
         <input 
          type='text' 
          placeholder='Text on top' 
          name='topText' 
          value={topText}
        />

        <br/><br/>

        <input 
          type='text' 
          placeholder='Text on bottom' 
          name='bottomText' 
          value={bottomText}
        />

        <br/><br/>
        
      </div>
      
      <div className='sizes'>
        <label>OUTPUT SIZE</label><br/>
          <button className='one-by-one' value='1:1' onClick={handleSizeChange}>1:1</button>
          <button className='three-by-four' value='3:4' onClick={handleSizeChange}>3:4</button>
          <button className='four-by-three' value='4:3' onClick={handleSizeChange}>4:3</button>
          <button className='three-by-five' value='3:5' onClick={handleSizeChange}>3:5</button>
          <button className='five-by-three' value='5:3' onClick={handleSizeChange}>5:3</button>
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

export default SettingsContainer