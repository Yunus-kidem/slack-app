import { Create, FiberManualRecord } from '@mui/icons-material';
import React from 'react'
import './Sidebar.css';

function Sidebar() {
return (
    <div className="sidebar">
        <div className="sidebar_header">
            <div className="sidebar_info">
            <h2>Slack Programmer</h2>
            <h3>
                <FiberManualRecord/>
                Yunus Kidem
            </h3>   
            </div>
            <Create/>
        </div>
    </div>
)
}

export default Sidebar;