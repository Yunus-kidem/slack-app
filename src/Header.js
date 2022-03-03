import React from 'react'
import './Header.css';
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className="header">

        <div className="header_left"> 
        <Avatar className="header_avatar" alt='Yunus' src=''/> 
        <AccessTimeIcon /> 
        <h2>Trying out!</h2>
        </div> 

        <div className="header_search"> 
        <SearchIcon />
        <input placeholder='search Yunus programmer'/> 
        </div>    

        <div className="header_right"> 
        {/* help icon */} 
        </div>    
        </div>
    )
}

export default Header