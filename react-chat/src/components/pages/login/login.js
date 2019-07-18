
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authorize} from '../../../actions';
import './login.css';
import { withRouter } from 'react-router-dom';

class Login extends Component{
state={
    login:'',
    password:''
}

componentDidUpdate(){

   const {login, history} = this.props;
   if (login && login.user){
       const {role} = login.user;
       role === 'admin'? history.push('/userlist') :  history.push('/');
   }
}
onAuthorizeClick = () => {
    const {authorize, history} =  this.props;
    
    const {login, password} = this.state;
    authorize(login, password);
}


onChangeLoginBox = (event) => {
    const text = event.target.value;
    this.setState({login: text});
}

onChangePasswordBox = (event) => {
    const text = event.target.value;
    this.setState({password: text});
}
    render()  {
        return (<div id="login-wrapper">
                        <input type="text" onChange={this.onChangeLoginBox} id="login" placeholder="login"></input>
                        <input type="text" onChange={this.onChangePasswordBox} id="password" placeholder="password"></input>
                        <button onClick={this.onAuthorizeClick} id="submit-btn">Login</button>
               </div>);
               } 
}

const mapDispatchToProps = (dispatch) => {

    return {
      authorize: (userName,password) => dispatch(authorize(userName, password)),
    };
  };

const mapStateToProps = ( {login}) => {
  return { login};
};

  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
