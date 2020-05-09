import React from 'react'

const MemeCard = ({ meme }) => {
  return(
    <div contentEditable='true' className="meme-div">
      <svg version="1.1"
          baseProfile="full"
          width="500" height="400"
          xmlns="http://www.w3.org/2000/svg">

        <rect className="background-box" width="100%" height="100%" fill="black" />

        <text className="top-text" x="250" y="43" fontSize="55" textAnchor="middle" fill="white">YOUR TEXT HERE</text>

        <rect className="img-box" width="100%" height="75%" x="0" y="50" fill="white" stroke="black" strokeWidth="2" />

        <image contentEditable="true" href={meme.image} width="100%" height="75%" x="0" y="50" />

        <text className="bottom-text" x="250" y="393" fontSize="55" textAnchor="middle" fill="white">YOUR TEXT HERE</text>

      </svg>
    </div>
  )
}

export default MemeCard