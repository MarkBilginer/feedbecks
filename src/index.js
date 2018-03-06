import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
//import './index.css'
import './css/main.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import './images/icons/favicon.ico'
import MyEmailForm from './MyEmailForm'
import store from './store.js';
import { addToFormId }  from './actions/formid-actions';

  class MyMessageForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLiked : null,
        userText: '',
        formID: '',
        timer: 0
      };
      this.onNext = this.onNext.bind(this);
      this.checkLike = this.checkLike.bind(this);
      this.checkDislike = this.checkDislike.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
      // Because we named the inputs to match their corresponding values in state, it's
      // super easy to update the state
      var userText = this.state.userText;
      userText = e.target.value;
      this.setState({'userText': userText});
    }

    onNext = (e) => {
      e.preventDefault();
      // get our form data out of state
      const { isLiked, userText} = this.state;

      if(this.state.isLiked === null){
        alert('You need to Like or Dislike before continuing. ');
      }

      request
			.post('https://api.dusuncembu.com/akkol/consumer/submitForm')
			.send({ 'userText': userText, 'isLiked': isLiked }) // sends a JSON post body
      .set('Content-Type', "application/x-www-form-urlencoded")
      .timeout({deadline: 10000}) // if there is no response after 10 seconds abort
			.then(response => {
      // Calling the end function will send the request
        const responseParsed = JSON.parse(response.text);
        //console.log(JSON.stringify(responseObject));
        //this.setState({formID: responseObject.extras.formID});
        store.dispatch(addToFormId(responseParsed.extras.formID));
        var stateLength = store.getState().formId.length;
        console.log(store.getState().formId[stateLength-1]);
        });
      //.catch(function(err){
        //alert('error');
      //});
      
      ReactDOM.render(
        <MyEmailForm />,
        document.getElementById('app')
       );

    }

    checkLike(){
      this.setState({ isLiked: true });
    }

    checkDislike(){
      this.setState({ isLiked: false });
    }

    render() {
      return (
        <div className="container-contact100">
    
        <div className="wrap-contact100">
          <div className="contact100-form-title">
            <span className="contact100-form-title-1">
              Contact Us
            </span>
    
            <span className="contact100-form-title-2">
              Feel free to drop us a line below!
            </span>
            <span>
              <button className='dislike-button' onClick={this.checkDislike}> Dislike</button>
              <button className='like-button' onClick={this.checkLike}> Like</button>
            </span>
          </div>
    
          <form className="contact100-form validate-form">
            <div className="wrap-input100 validate-input" data-validate = "Message is required">
              <span className="label-input100">Message:</span>
              <textarea className="input100" onChange={this.onChange} name="message" placeholder="Your Comment..."></textarea>
              <span className="focus-input100"></span>
            </div>
    
            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn" onClick={this.onNext}>
                <span>
                  Next
                  <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div> );
    }
  }
  
  ReactDOM.render(
      <MyMessageForm />,
    document.getElementById('app')
  );
