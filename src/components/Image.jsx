import React from 'react'

export default function Image({url,height,width,minWidth,maxWidth,minHeight,maxHeight}) {
  return (
    <>
     <img src={url} style={{height:height,width:width,minWidth:minWidth,maxWidth:maxWidth,minHeight:minHeight,maxHeight:maxHeight}}/> 
    </>
  )
}
