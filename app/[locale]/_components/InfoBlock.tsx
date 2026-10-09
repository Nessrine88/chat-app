import Image from 'next/image'
import React from 'react'

const InfoBlock = ({data}:any) => {
    const {headline, text, button,reversed} = data
  return (
    <div className= {`info ${reversed ? "info--reversed": ""} `}>
        
<Image className='info__image' src= { '/info-blocks/rectangle.png'} width={500} height={500} alt="Hero home image" />
        
       
                    
    <div className="info__text">
        <h2 className='info__headline'>{headline} </h2>
        <p className='copy'>{text} </p>
        <button className="btn btn--medium btn--turquoise">{button} </button>
    </div>
    </div>
  )
}

export default InfoBlock