import React, { Component } from "react";
import { connect } from 'react-redux'
import {hideEditPopup, messageEdited} from '../../actions';

class EditMessagePopup extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.message !== this.props.message) {
           this.setState({editingMessage: nextProps.message});
        }
    }

    onChangeTextBox = (event) =>{
        this.input = event.target;
        const text = event.target.value;
        let { editingMessage} = this.state;
        editingMessage.message = text;
         this.setState({editingMessage});
       }

       onSave =() => {
          const { hideEditPopup,  editMessage } = this.props;
          editMessage(this.state.editingMessage);
          hideEditPopup();   
       }

       onCancel = () => {
        const { hideEditPopup } = this.props;
        this.setState({editingMessage: null});
        hideEditPopup();
       }

    getEditPageContent() {
        return (
            <div className="modal" style={{ display: "block" }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ padding: "5px" }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Edit message</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onCancel}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                       <input value = {this.state.editingMessage.message} onChange ={this.onChangeTextBox} type="text"></input>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={this.onCancel}>Cancel</button>
                            <button className="btn btn-primary" onClick={this.onSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const isShown = this.props.isShown;
        return isShown ? this.getEditPageContent() : null;
    }
}

const mapStateToProps = ({isEditPopupShown, editingMessage}) => {
    return {
        isShown: isEditPopupShown,
        message:  editingMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideEditPopup: () => dispatch(hideEditPopup()),
        editMessage: (message) => dispatch(messageEdited(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMessagePopup);

