
import React, {Component} from "react";
import "./chat-content-panel-footer.css";
import { withRouter } from 'react-router-dom';

 class ChatContentPanelFooter extends Component{

   
    
     onCreateMessageClick = () => {
      const {history} = this.props;
      history.push('/editmessage');
       }

    render () {
       const {id} = this.props;
    
             return (
             <div className="chatContentPanelFooterWrapper">
                <button id="createMessage" onClick = {() => this.onCreateMessageClick()}>CreateMessage</button>
           </div>);
    }
           
};
  
export default withRouter(ChatContentPanelFooter);
  
  
