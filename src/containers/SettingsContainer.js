import React from 'react'

const SettingsContainer = ({ handleSizeChange, handleTextChange, handleColorChange, handleTextColorChange, topText, bottomText }) => {

  return(
    <div className='settings'>
      <div className='texts'>
         <h4>ADD TEXT TO MEME:</h4>

         <input 
          type='text' 
          placeholder='Text on top' 
          name='topText' 
          value={topText}
          onChange={handleTextChange}
        />

        <br/><br/>

        <input 
          type='text' 
          placeholder='Text on bottom' 
          name='bottomText' 
          value={bottomText}
          onChange={handleTextChange}
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

      <br/>

      <div className='colors'>
        <label>BACKGROUND COLOR</label><br/>
          <button 
            className='black' 
            name='color'
            value='black' 
            onClick={handleColorChange}
          >BLACK</button>
          <button 
            className='blue' 
            name='color'
            value='blue' 
            onClick={handleColorChange}
          >BLUE</button>
          <button 
            className='green' 
            name='color'
            value='green' 
            onClick={handleColorChange}
          >GREEN</button>
          <button 
            className='yellow' 
            name='color'
            value='yellow'
            onClick={handleColorChange}
          >YELLOW</button>
          <button 
            className='white' 
            name='color'
            value='white' 
            onClick={handleColorChange}
          >WHITE</button>
      </div>

      <br/>

      <div className='fonts'>
        <label>FONT</label><br/>
          <button 
            className='bold'
            name='font'
            value="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
            onClick=''
          >BOLD</button>
          <button 
            className='cursive'
            name='font'
            value=''
          >CURSIVE</button>
          <button 
            className='serif'
            name='font'
            value=''
          >SERIF</button>
          <button 
            className='sans-serif'
            name='font'
            value=''
          >SANS-SERIF</button>
          <button 
            className='whimsy'
            name='font'
            vaue=''
          >WHIMSY</button>
      </div>

      <br/>

      <div className='text-color'>
        <label>TEXT COLOR</label><br/>
          <button 
            className='black'
            name='textColor'
            value='black'
            onClick={handleTextColorChange}
          >BLACK</button>
          <button 
            className='blue'
            name='textColor'
            value='blue'
            onClick={handleTextColorChange}
          >BLUE</button>
          <button 
            className='green'
            name='textColor'
            value='green'
            onClick={handleTextColorChange}
          >GREEN</button>
          <button 
            className='yellow'
            name='textColor'
            value='yellow'
            onClick={handleTextColorChange}
          >YELLOW</button>
          <button 
            className='white'
            name='textColor'
            value='white'
            onClick={handleTextColorChange}
          >WHITE</button>
      </div>

      <br/>

      <button className='download'>Download Meme</button>
    </div>
  )
}

export default SettingsContainer