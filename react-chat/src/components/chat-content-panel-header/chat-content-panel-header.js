import React from 'react';
import "./chat-content-panel-header.css";

const ChatContentPanelHeader = ()=>{
    return (<div className="ChatContentPanelHeaderWrapper">
            <p>My chat</p>
            <p>23 participants</p>
            <p>53 messages</p>
            <p>last message at 14.28</p>
           </div>);
};

export default ChatContentPanelHeader;