import React from "react";
import { CardContainer, CardBox } from "/src/components/Card/styles.js";


export function Card ({item}) {

  const {images = {},title = '',  scoreMessage = ""} = item

  return (
    <CardContainer>
      {/* className="anime-item" */}
      <CardBox>
        {/* Mostrar la imagesn si está presente */}
        {images && images.jpg
        && (
        <img 
          src={images.jpg.image_url}
          alt={item.title}
          className='img'
        />
      )}
        <p className='title'>{title}</p>
        {/* <p>{item.scoreMessage}</p> */}
      </CardBox>
      <p className='message'>{scoreMessage}</p> 
    </CardContainer>
  )
}