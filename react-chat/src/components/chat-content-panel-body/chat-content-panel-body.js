import React from 'react';
import Message from '../message';
import logo from "../../images/logo2.jpg";
import { connect } from 'react-redux';
import "./chat-content-panel-body.css";

const ChatContentPanelBody  = ({messages}) =>{
        const allMessages =  messages.map((item, index) => {
              return <Message  key={item.id} 
                      id ={item.id} text={item.message} isUserMessage={item.user !== 'current'} 
                      date={item.created_at} image={item.avatar} 
                      last={item.user === 'current' && index === messages.length - 1  }/>
          });
          return (<div className="content-panel-body-wrapper">
              {
                  allMessages
              }
                 </div>);
};

const mapStateToProps = ({ messages :{messages}}) => {
    return { messages};
  };
  
  export default connect(mapStateToProps)( ChatContentPanelBody);
