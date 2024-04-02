import React from 'react'
import './SidebarRow.css'
import { Avatar } from '@mui/material'


function SidebarRow(props) {
  return (
    <div className='sidebar-row'>
      {props.src&&<Avatar src={props.src}/>}
      {props.Icon&&<props.Icon/>}
      <h4>{props.title}</h4>
        

    </div>
  )
}

export default SidebarRow