import React from 'react'

const SettingsContainer = ({ handleSizeChange, handleChange, topText, bottomText }) => {

  return(
    <div className='settings'>
      <div className='texts'>
         <h4>ADD TEXT TO MEME:</h4>

         <input 
          type='text' 
          placeholder='Text on top' 
          name='topText' 
          value={topText}
          onChange={handleChange}
        />

        <br/><br/>

        <input 
          type='text' 
          placeholder='Text on bottom' 
          name='bottomText' 
          value={bottomText}
          onChange={handleChange}
        />

        <br/><br/>

      </div>
      
      <div className='sizes'>
        <label>OUTPUT SIZE</label><br/>
          <button 
            className='one-by-one'
            name='size' 
            value='1:1' 
            onClick={handleSizeChange}
          >1:1</button>
          <button 
            className='three-by-four' 
            name='size'
            value='3:4' 
            onClick={handleSizeChange}
          >3:4</button>
          <button 
            className='four-by-three'
            name='size' 
            value='4:3' 
            onClick={handleSizeChange}
          >4:3</button>
          <button 
            className='three-by-five'
            name='size' 
            value='3:5' 
            onClick={handleSizeChange}
          >3:5</button>
          <button 
            className='five-by-three'
            name='size' 
            value='5:3' 
            onClick={handleSizeChange}
          >5:3</button>
      </div>

      <br/>

      <div className='colors'>
        <label>BACKGROUND COLOR</label><br/>
          <button 
            className='black' 
            name='color'
            value='black' 
            onClick={handleChange}
          >BLACK</button>
          <button 
            className='blue' 
            name='color'
            value='blue' 
            onClick={handleChange}
          >BLUE</button>
          <button 
            className='green' 
            name='color'
            value='green' 
            onClick={handleChange}
          >GREEN</button>
          <button 
            className='yellow' 
            name='color'
            value='yellow'
            onClick={handleChange}
          >YELLOW</button>
          <button 
            className='white' 
            name='color'
            value='white' 
            onClick={handleChange}
          >WHITE</button>
      </div>

      <br/>

      <div className='fonts'>
        <label>FONT</label><br/>
          <button 
            className='bold'
            name='font'
            value="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
            onClick={handleChange}
          >BOLD</button>
          <button 
            className='cursive'
            name='font'
            value='cursive'
            onClick={handleChange}
          >CURSIVE</button>
          <button 
            className='serif'
            name='font'
            value="Georgia, 'Times New Roman', Times, serif"
            onClick={handleChange}
          >SERIF</button>
          <button 
            className='sans-serif'
            name='font'
            value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            onClick={handleChange}
          >SANS-SERIF</button>
      </div>

      <br/>

      <div className='text-color'>
        <label>TEXT COLOR</label><br/>
          <button 
            className='black'
            name='textColor'
            value='black'
            onClick={handleChange}
          >BLACK</button>
          <button 
            className='blue'
            name='textColor'
            value='blue'
            onClick={handleChange}
          >BLUE</button>
          <button 
            className='green'
            name='textColor'
            value='green'
            onClick={handleChange}
          >GREEN</button>
          <button 
            className='yellow'
            name='textColor'
            value='yellow'
            onClick={handleChange}
          >YELLOW</button>
          <button 
            className='white'
            name='textColor'
            value='white'
            onClick={handleChange}
          >WHITE</button>
      </div>

      <br/>

      <button className='download'>Download Meme</button>
    </div>
  )
}

export default SettingsContainer