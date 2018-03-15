import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import './css/main.css'
import store from './store'
import ThankForm from './ThankForm'

class MyEmailForm extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        mail: '',
        notificationText: ''
      }
    }

    onChange = (event) => {
        var mail = this.state.mail;
        mail = event.target.value;
        this.setState({ 'mail': mail});
    }

    onSubmit = (event) => {
        event.preventDefault();

        if(this.state.mail === ''){
          this.setState({notificationText: 'Mail adresi boş olamaz.'})
          return;
        }

        const mail = this.state.mail;
        const stateLength = store.getState().formId.length;
        const responseObject = store.getState().formId[stateLength-1]
        //const formID = JSON.stringify(store.getState().formId[stateLength-1]);
        const responseString = JSON.stringify(responseObject);
        console.log('string: '+responseString);
        const responseParsed = JSON.parse(responseString);
        console.log('parsed: '+responseParsed.formId);
        const formID = responseParsed.formId;
        request
			.post('https://api.dusuncembu.com/akkol/consumer/updateForm')
			.send({ 'formID': formID, 'mail': mail }) // sends a JSON post body
			.set('Content-Type', "application/x-www-form-urlencoded")
			.then(response => {
      // Calling the end function will send the request
      console.log('formID: '+formID+' mail: '+mail);
      const responseObject = JSON.parse(response.text);
      console.log(JSON.stringify(responseObject));
        }
      );

      ReactDOM.render(
        <ThankForm />,
        document.getElementById('app')
      );

    }

    render() {
      return (
    <div className="container-contact100">
    
        <div className="wrap-contact100">
          <div className="contact100-form-title">
            <span className="contact100-form-title-1">
              Son Adım/Neredeyse Bitti
            </span>
            <span className="contact100-form-title-2">
              
            </span>
        </div>

        <form className="contact100-form validate-form">
            <div className="wrap-input100 validate-input" >
            <div className="container-contact100-form-btn">
                  <h4 style={{top: '-70%', position: 'relative', color: 'red'}}>{this.state.notificationText}</h4>
                </div>
				<span className="label-input100">Email:</span>
                <input className="input100" type="text" name="email" onChange={this.onChange} 
                        placeholder="Email adresini giriniz"/>
				<span className="focus-input100"></span>
		    </div>


            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn" onClick={this.onSubmit}>
                <span>
                Gönder
                  <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
    </div> );
    }

  }

  export default MyEmailForm;