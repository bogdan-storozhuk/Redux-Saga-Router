import React,{Component} from 'react';
import { connect } from 'react-redux';
import ChatContentPanelHeader from '../chat-content-panel-header';
import ChatContentPanelBody from '../chat-content-panel-body';
import ChatContentPanelFooter from '../chat-content-panel-footer';
import Spinner from '../spinner';
import EditMessagePopup  from '../edit-message-popup/'
import {fetchMessages} from '../../actions';
import "./chat-content-panel.css";
import ErrorIndicator  from '../error-indicator';

class ChatContentPanel extends Component {

    componentDidMount(){
      if (this.props.loading){
        this.props.getMessages();
      }
    }

render(){

   const  {loading, error } = this.props;
        return (<div className='ChatContentPanelWrapper'>
                   <ChatContentPanelHeader/>
                   { error? <ErrorIndicator/>:
                    !loading? <ChatContentPanelBody tag="value"/> : <Spinner/>}
                   <EditMessagePopup/>
                   <ChatContentPanelFooter  />
               </div>);
    };
}

const mapStateToProps = ({ messages : {loading, error} }) => {
    return { loading, error };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {getMessages: () => dispatch(fetchMessages())}
};

  
  export default connect(mapStateToProps, mapDispatchToProps)(ChatContentPanel);
