import { AccessTime, HelpOutline, Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import './Header.css';


function Header() {
    return (
        <div className="header">

        <div className="header_left"> 
        <Avatar className="header_avatar" alt='Yunus' src=''/> 
        <AccessTime/>
        </div> 

        <div className="header_search"> 
        <Search/>
        <input placeholder="Search Slack Programmer"/> 
        
        </div>    

        <div className="header_right"> 
        <HelpOutline/>
        </div>    
        </div>
    )
}

export default Header