import React from 'react'
import './Story.css'
import { Avatar } from '@mui/material'

function Story(props) {
  return (
    <div style={{backgroundImage:`url(${props.image})`}} className='story'>
      
      <Avatar className='story-avatar' src={props.profileSrc} />
     
      <h4>{props.title}</h4>

    </div>
  )
}

export default Story