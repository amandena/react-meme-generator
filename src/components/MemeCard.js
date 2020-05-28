import React from 'react'

const MemeCard = ({ meme }) => {
  return(
    <div className="meme-div">
      <svg
        id="svg"
        version="1.1"
        baseProfile="full"
        width="500" height="420"
        xmlns="http://www.w3.org/2000/svg"
      >

        <rect 
          className="background-box" 
          width="100%" 
          height="100%" 
          fill={meme.color} 
          href={meme.image} 
        />

        <image 
          href={meme.image} 
          width="100%" 
          height="100%" 
        />

        <text 
          className="top-text" 
          x="250" 
          y="30" 
          fontSize="28" 
          fontFamily={meme.font}
          textAnchor="middle" 
          fill={meme.textColor}
        >
          {meme.topText}
        </text>

        <text 
          className="bottom-text" 
          x="250" 
          y="405" 
          fontSize="28"
          fontFamily={meme.font}
          textAnchor="middle" 
          fill={meme.textColor}
        >
          {meme.bottomText}
        </text>
      </svg>
    </div>
  )
}

export default MemeCard