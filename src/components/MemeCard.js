import React from 'react'

const MemeCard = ({ meme }) => {
  return(
    <div className="meme-div">
      <svg version="1.1"
          baseProfile="full"
          width="500" height="100%"
          xmlns="http://www.w3.org/2000/svg">

        <rect className="background-box" width="100%" height="100%" fill={meme.color} href={meme.image} />

        <image href={meme.image} width="100%" height="100%" />

        <text className="top-text" x="250" y="50" fontSize="55" textAnchor="middle" fill="white">{meme.topText}</text>

        <text className="bottom-text" x="250" y="370" fontSize="55" textAnchor="middle" fill="white">{meme.bottomText}</text>

      </svg>
    </div>
  )
}

export default MemeCard