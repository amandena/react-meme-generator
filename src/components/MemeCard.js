import React from 'react'

const MemeCard = () => {
  return(
    <div contentEditable='true'>
      <svg version="1.1"
          baseProfile="full"
          width="500" height="400"
          // viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="black" />

        <text x="250" y="43" font-size="55" text-anchor="middle" fill="white">YOUR TEXT HERE</text>

        <rect width="100%" height="75%" x="" y="50" fill="white" />

        <text x="250" y="393" font-size="55" text-anchor="middle" fill="white">YOUR TEXT HERE</text>

      </svg>
    </div>
  )
}

export default MemeCard