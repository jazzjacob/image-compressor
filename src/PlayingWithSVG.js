import { useState } from 'react'

const PlayingWithSVG = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState('')
  const [mouseOver, setMouseOver] = useState('')

  function handleKeyPress(e) {
    console.log(e)
    if (e.charCode === 13) {
      handleBodyMapClick(e.target.id)
    }
  }

  function handleBodyMapClick(id) {
    setSelectedBodyPart('')
    switch (id) {
      case 'bodymap-head':
        setSelectedBodyPart('Head')
        break;
      case 'bodymap-neck':
        setSelectedBodyPart('Neck')
        break;
      case 'bodymap-arm':
        setSelectedBodyPart('Arm')
        break;
      default:
        break;
    }
  }

  function handleMouseEnter(e) {
    setMouseOver(e.target.id)
  }

  function handleMouseLeave(e) {
    setMouseOver('')
  }

  return (
    <div style={style}>
      <h2>Interactive svg-paths</h2>
      <p>Hover, click, focus and keyboard (tab) navigation</p>
      <div style={svgContainer}>
        <svg width="100%" height="100%" viewBox="0 0 709 167" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path onFocus={handleMouseEnter} onBlur={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='bodymap-head' tabIndex="0" onKeyPress={handleKeyPress} onClick={(e) => handleBodyMapClick(e.target.id)} fillRule="evenodd" clipRule="evenodd" d="M447 65H279V99H195V167H363V133H447V65Z" fill="#C4C4C4"/>
          <path onFocus={handleMouseEnter} onBlur={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='bodymap-neck' tabIndex="0" onKeyPress={handleKeyPress} onClick={(e) => handleBodyMapClick(e.target.id)} fillRule="evenodd" clipRule="evenodd" d="M709 0H541V34H457V102H625V68H709V0Z" fill="#C4C4C4"/>
          <path onFocus={handleMouseEnter} onBlur={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='bodymap-arm' tabIndex="0" onKeyPress={handleKeyPress} onClick={(e) => handleBodyMapClick(e.target.id)} fillRule="evenodd" clipRule="evenodd" d="M170 77C216.944 77 255 66.4787 255 53.5C255 40.5213 216.944 30 170 30C123.66 30 85.9812 40.2522 85.0188 53C85.0126 53 85.0062 53 85 53C38.0558 53 0 63.5213 0 76.5C0 89.4787 38.0558 100 85 100C131.34 100 169.019 89.7478 169.981 77C169.987 77 169.994 77 170 77Z" fill="#C4C4C4"/>
        </svg>
      </div>
      <h2>{selectedBodyPart}</h2>
      {mouseOver && <p>{mouseOver}</p>}
    </div>
  )
}


const style = {
  height: '1000px',
  fontFamily: 'helvetica'
} 

const svgContainer = {
  height: '300px',
  width: '300px',
  backgroundColor: 'gold',
  objectFit: 'contain'
}

export default PlayingWithSVG
