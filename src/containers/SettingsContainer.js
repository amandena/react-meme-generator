import React from 'react'

const SettingsContainer = ({ handleSizeChange, handleTextChange, handleColorChange, handleTextColorChange, topText, bottomText }) => {

  return(
    <div className='settings'>
      <div className='texts'>
         <h3>Add Text to Meme:</h3>

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

      <br/><br/>

      <div className='colors'>
        <label>BACKGROUND COLOR</label><br/>
          <button 
            className='black' 
            value='black' 
            onClick={handleColorChange}
          >BLACK</button>
          <button 
            className='blue' 
            value='blue' 
            onClick={handleColorChange}
          >BLUE</button>
          <button 
            className='green' 
            value='green' 
            onClick={handleColorChange}
          >GREEN</button>
          <button 
            className='yellow' 
            value='yellow'
            onClick={handleColorChange}
          >YELLOW</button>
          <button 
            className='white' 
            value='white' 
            onClick={handleColorChange}
          >WHITE</button>
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

      <div className='text-color'>
        <label>TEXT COLOR</label><br/>
          <button 
            className='black'
            value='black'
            onClick={handleTextColorChange}
          >BLACK</button>
          <button 
            className='blue'
            value='blue'
            onClick={handleTextColorChange}
          >BLUE</button>
          <button 
            className='green'
            value='green'
            onClick={handleTextColorChange}
          >GREEN</button>
          <button 
            className='yellow'
            value='yellow'
            onClick={handleTextColorChange}
          >YELLOW</button>
          <button 
            className='white'
            value='white'
            onClick={handleTextColorChange}
          >WHITE</button>
      </div>

      <br/><br/>

      <button className='download'>Download Meme</button>
    </div>
  )
}

export default SettingsContainer