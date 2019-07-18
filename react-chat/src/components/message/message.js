import React from 'react';
import {connect} from 'react-redux';
import {removeMessage, showEditPopup, getEditingMessage }  from '../../actions';
import "./message.css";


const onLikeClick = (event) => {
  if(event.target.innerText == 'Like'){
    event.target.innerText = '1';
  }
  else{
    event.target.innerText = 'Like';
  }

}
const Message = ({text, image, isUserMessage, date, id, removeMessage, showEditPopup, getEditingMessage, last })=>{
    const className = isUserMessage? 'message-user' : 'message-me';

    return (
    <div className={className}>
         <img src={image} className="user-img"/>
          <p className="user-message">{text}</p>
          <p className="user-date">{date}</p>

          
          {
              isUserMessage?    <button onClick={onLikeClick} type="button" 
              className="user-likeButton">Like</button> : null
          }
                 
            {
              !isUserMessage? <button type="button"  onClick = {() => removeMessage(id)}  
              className="user-deleteButton">Delete</button> :null
            }
            {
              last?
              <button type="button"  onClick = {() => {
                                                        showEditPopup();
                                                        getEditingMessage(id);}
                                                    }  
              className="user-editButton">Edit</button> : null
            }
                   
    </div>)
};

const mapDispatchToProps = (dispatch) => {

  return {
    removeMessage: (id) => dispatch(removeMessage(id)),
    showEditPopup: () => dispatch(showEditPopup()),
    getEditingMessage: (id) => dispatch(getEditingMessage(id)),
  };
};


export default connect(null,mapDispatchToProps)(Message);
