import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';

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
        <SidebarOption Icon={InsertComment} title="Threads" />
        <SidebarOption Icon={Inbox} title="Mentions & reactions" />
        <SidebarOption Icon={Drafts} title="Saved items" />
        <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
        <SidebarOption Icon={PeopleAlt} title="People & user groups" />
        <SidebarOption Icon={Apps} title="Apps" />
        <SidebarOption Icon={FileCopy} title="File browser" />
        <SidebarOption Icon={ExpandLess} title="Show less" />
        <hr/>
        <SidebarOption Icon={ExpandMore} title="Channels" />
        <hr/>
        <SidebarOption Icon={Add} title="Add Channel" />
        <SidebarOption title="Stay-motivated" />
    </div>
)
}

export default Sidebar;