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
import { addToFormId } from './actions/formid-actions';

class MyMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: null,
      userText: '',
      formID: '',
      charsPerMessage: 280,
      charsLeft: 280,
      notificationText: '',
      likeBtnColour: "#27AE60",  
      dislikeBtnColour: "#E74C3C"
    };
    this.onNext = this.onNext.bind(this);
    this.checkLike = this.checkLike.bind(this);
    this.checkDislike = this.checkDislike.bind(this);
    this.onChange = this.onChange.bind(this);
    this.countWord = this.countWord.bind(this);
  }

  countWord = (e) => {
    var currentText = e.target.value;
    //Now we need to recalculate the number of characters that have been typed in so far
    var characterCount = currentText.length;
    var l_charsLeft = this.state.charsPerMessage - characterCount;
    this.setState({ 'charsLeft': l_charsLeft });
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    if (this.state.charsLeft === 0) {
      //this.setState({notificationText: 'Maximum char reached.'});
    } else if(this.state.charsLeft === 280){

    }

    this.countWord(e);
    var userText = this.state.userText;
    userText = e.target.value;
    this.setState({ 'userText': userText });
  }

  onNext = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { isLiked, userText } = this.state;

    if (this.state.isLiked === null) {
      //do something if the person hasnt liked yet
      this.setState({notificationText: 'Deneyimin pozitif mi negatif mi??'});
      return;
    } else if (this.state.userText.length === 0) {
      //do something if the message is empty
      this.setState({notificationText: 'Görüşünü yazmalısın.'});
      return;
    }

    request
      .post('https://api.dusuncembu.com/akkol/consumer/submitForm')
      .send({ 'userText': userText, 'isLiked': isLiked }) // sends a JSON post body
      .set('Content-Type', "application/x-www-form-urlencoded")
      .timeout({ deadline: 10000 }) // if there is no response after 10 seconds abort
      .then(response => {
        // Calling the end function will send the request
        const responseParsed = JSON.parse(response.text);
        //console.log(JSON.stringify(responseObject));
        //this.setState({formID: responseObject.extras.formID});
        store.dispatch(addToFormId(responseParsed.extras.formID));
        var stateLength = store.getState().formId.length;
        console.log(store.getState().formId[stateLength - 1]);
      });
    //.catch(function(err){
    //alert('error');
    //});

    ReactDOM.render(
      <MyEmailForm />,
      document.getElementById('app')
    );

  }

  checkLike(e) {
    e.preventDefault();
    this.setState({ isLiked: true, likeBtnColour: "#196F3D" ,dislikeBtnColour: "#E74C3C"});
    if(this.state.notificationText === 'Deneyimin pozitif mi negatif mi?'){
    this.setState({notificationText: ''});
  }
}
  checkDislike(e) {
    e.preventDefault();
    this.setState({ isLiked: false, likeBtnColour: "#27AE60" ,dislikeBtnColour: "#8b0000"});
    if(this.state.notificationText === 'Deneyimin pozitif mi negatif mi?'){
      this.setState({notificationText: ''});
    }
  }

  render() {
    return (
      <div className="container-contact100">

        <div className="wrap-contact100">
          <div className="contact100-form-title">
            <span className="contact100-form-title-1">
              Bize Ulaşın
            </span>

            <span className="contact100-form-title-2">
              Bizimle iletişime geçmekten lütfen çekinmeyin.
            </span>

          </div>
          <div>
            <form className="contact100-form validate-form">
            
              <div className="container-contact100-form-btn">
                <div className="container-contact100-form-btn">
                  <h4 style={{top: '-70%', position: 'relative', color: 'red'}}>{this.state.notificationText}</h4>
                </div>
              
                <div className="container-contact100-form-btn-MarkB dislike">
                <button className='contact100-form-btn-MarkB'
                        style={{backgroundColor: this.state.dislikeBtnColour}} 
                        onClick={this.checkDislike}><i className="fa fa-thumbs-o-down" style={{fontSize: "200%"}}></i></button>
                </div>
                <div className="container-contact100-form-btn-MarkB">
                <button className='contact100-form-btn-MarkB'
                        style={{backgroundColor: this.state.likeBtnColour}} 
                        onClick={this.checkLike}><i className="fa fa-thumbs-o-up" style={{fontSize: "200%"}}></i></button>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Message is required">
                  <span className="label-input100"><strong>Mesaj:</strong></span>
                  <textarea className="input100"
                    onChange={this.onChange}
                    maxLength='280'
                    placeholder="Görüşünüz bizim için önemli..."></textarea>
                  <span className="focus-input100"></span>
                </div>
                <span id='wordcount'>{this.state.charsLeft}</span>
                <div className="container-contact100-form-btn">
                  <button className="contact100-form-btn" onClick={this.onNext}>
                    <span>
                      İleri &emsp;
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>);
  }
}

ReactDOM.render(
  <MyMessageForm />,
  document.getElementById('app')
);
