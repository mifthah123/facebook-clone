import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Avatar from '@mui/material/Avatar';
import {  IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png" alt="" />
        <div className='header-input'>
            <SearchIcon/>
            <input placeholder='Search facebook' type="text" />
        </div>
        </div>
        <div className='header-middle'>
            <div className='header-option'>
                <HomeIcon fontSize='large'/>
            </div>
            <div className='header-option'>
                <FlagIcon fontSize='large'/>
            </div>
            <div className='header-option'>
                <SubscriptionsIcon fontSize='large'/>

            </div>
            <div className='header-option' >
                <StorefrontIcon fontSize='large'/>

            </div>
            <div className='header-option'>
                <SupervisedUserCircleIcon fontSize='large'/>
            </div>
        </div>
        <div className='header-right'>
            <div className='header-info'>
                <Avatar />
                <h4>mifthah</h4>
            </div>
            <IconButton>
               <AddIcon/>

            </IconButton>

            <IconButton>
                <ForumIcon/>
            </IconButton>

            <IconButton>
                <NotificationsActiveIcon/>

            </IconButton>

            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header