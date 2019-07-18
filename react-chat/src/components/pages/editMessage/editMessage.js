
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addMessage} from '../../../actions';
import './editMessage.css';
import { withRouter } from 'react-router-dom';

class EditMessage extends Component{
state={
   text:'' 
}

onChangeEditBox = (event) => {
    const text = event.target.value;
    this.setState({text});
}


onClickSave =() => {
   const {addMessage, history} = this.props;
   
   let date = new Date().toLocaleString();
     
   let id = Math.floor(Math.random() * (50000000 - 1) ) + 1

   addMessage({ key: id,
              id: id,
              user: 'current',
               message:this.state.text,
               created_at: date
              });
              
              history.push('/');
    }


    render()  {
        return (<div id="page-wrapper">
                    <div id="message-wrapper">
                        <p>Edit message</p>
                        <textarea onChange={this.onChangeEditBox} id="message_edit"></textarea>
                    </div>
                    <div id="button-wrapper">
                     <button onClick={this.onClickSave} className="edit_buttons">Ok</button>
                     <button className="edit_buttons">Cancel</button>
                    </div>
                </div>);
               } 
}

 const mapDispatchToProps = (dispatch) => {

     return {
       addMessage: (message) => dispatch(addMessage(message)),
   };
   };

  
  export default withRouter(connect(null,mapDispatchToProps)(EditMessage));