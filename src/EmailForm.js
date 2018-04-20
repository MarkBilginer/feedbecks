import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import { Form, Button } from 'react-bootstrap';
import './css/main.css'
import store from './store'
import ThankNote from './ThankNote'

class EmailForm extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        mail: ''
      }
    }

    onChange = (event) => {

      const input_error= document.querySelector('input.input.error');
      const input_svg_error= document.querySelector('.input-error-svg-email.error');
      const input_tooltip_error= document.querySelector('.customtooltip.email.error');
  
      if(input_error && input_svg_error && input_tooltip_error) {
        this.EmailFormRemoveError('like-dislike');
      }

      var mail = this.state.mail;
      mail = event.target.value;
      this.setState({ 'mail': mail});
    }

    EmailFormAddError(){ 
      document.querySelector("input.input").classList.add("error");
      document.querySelector(".input-error-svg-email").classList.add("error");
      document.querySelector(".customtooltip.email").classList.add("error");
    }

    EmailFormRemoveError(){ 
      document.querySelector("input.input").classList.remove("error");
      document.querySelector(".input-error-svg-email").classList.remove("error");
      document.querySelector(".customtooltip.email").classList.remove("error");
  }
   
  isEmailValid(string){
    

    return false;
  }

    onSubmit = (event) => {
        event.preventDefault();

        const mail = this.state.mail;

        if(this.state.mail === ''){
          this.EmailFormAddError();
          return;
        } else if (!this.isEmailValid(mail)){
          
        }

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
        <ThankNote />,
        document.getElementById('main')
      );

    }

    render() {
      return (
        <Form className="main-form">
            
            <div className="wrap-input">

              <div className="customtooltip email">
                Lütfen geçerli bir e-posta adresi gir. Şirketler buradan 
                sana ulaşabileck.
              </div>
              <input className="input" type="email" name="email" onChange={this.onChange} 
                     placeholder="your@email.com"/>
              <span><svg className="input-error-svg-email"></svg></span>
		        </div>


            <div className="container-main-form-btn">
              <Button className="main-form-btn-next" onClick={this.onSubmit}>
                <span>Paylaş</span>
              </Button>
            </div>

          </Form>
        );
    }

  }

  export default EmailForm;