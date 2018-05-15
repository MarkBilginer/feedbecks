import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import {
  Form,
  FormGroup,
  FormControl,
  Col,
  Button,
  Tooltip,
  Well,
  Label,
  Overlay,
  InputGroup,
  HelpBlock
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
// import
// './fonts/fontawesome-free-5.0.8/web-fonts-with-css/css/fontawesome-all.min.cs
// s '
import store from './store';
import ThankModal from './ThankModal';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    let email = localStorage.getItem('email');
    this.state = {
      mail: email ? email : '',
      showModel: false
    }
    console.log('contructor variable mail has value: ' + this.state.mail);
    this.handleModal = this.handleModal.bind(this);

  }

  componentDidMount() {
    if (this.state.mail !== '') {
      document.getElementById('formControlsEmail').value = this.state.mail;
    }
  }

  componentWillUnmount() {}

  onChange = (event) => {

    const input_error = document.querySelector('input.input.error');
    const input_svg_error = document.querySelector('.input-error-svg-email.error');
    const input_tooltip_error = document.querySelector('.customtooltip.email.error');

    if (input_error && input_svg_error && input_tooltip_error) {
      this.EmailFormRemoveError('like-dislike');
    }

    var mail = this.state.mail;
    mail = event.target.value;
    this.setState({'mail': mail});
  }

  EmailFormAddError() {
    document
      .querySelector("input.input")
      .classList
      .add("error");
    document
      .querySelector(".input-error-svg-email")
      .classList
      .add("error");
    document
      .querySelector(".customtooltip.email")
      .classList
      .add("error");
  }

  EmailFormRemoveError() {
    document
      .querySelector("input.input")
      .classList
      .remove("error");
    document
      .querySelector(".input-error-svg-email")
      .classList
      .remove("error");
    document
      .querySelector(".customtooltip.email")
      .classList
      .remove("error");
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.mail === '') {
      this.EmailFormAddError();
      return;
    }

    const stateLength = store
      .getState()
      .formId
      .length;
    const responseObject = store
      .getState()
      .formId[stateLength - 1]
    //const formID = JSON.stringify(store.getState().formId[stateLength-1]);
    const responseString = JSON.stringify(responseObject);
    console.log('string: ' + responseString);
    const responseParsed = JSON.parse(responseString);
    console.log('parsed: ' + responseParsed.formId);
    const formID = responseParsed.formId;

    console.log('sending request to: https://api.dusuncembu.com/' + this.props.companyName + '/consumer/submitForm');
    const mail = this.state.mail;
    request
      .post('https://api.dusuncembu.com/' + this.props.companyName + '/consumer/updateForm')
      .send({'formID': formID, 'mail': mail}) // sends a JSON post body
      .set('Content-Type', "application/x-www-form-urlencoded")
      .then(response => {
        // Calling the end function will send the request
        console.log('formID: ' + formID + ' mail: ' + mail);
        const responseObject = JSON.parse(response.text);
        console.log(JSON.stringify(responseObject));

        if (responseObject.isSucceed) {
          localStorage.setItem('email', mail);
          this.setState({showModal: !this.state.showModal});
        } else {
          this.EmailFormAddError();
        }

      });
  }

  clearEmailField = (event) => {
    event.preventDefault();
    document
      .getElementById('formControlsEmail')
      .value = '';
  }

  formatCompanyName() {
    let str = this.props.companyName;
    str = str
      .toLowerCase()
      .replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
      });
    return str;
  }
    handleModal() {
      let isVisible = this.state.showModal;
      this.setState({ showModal: !isVisible });
  }

  render() {
    return (
      <div>
      <Well bsSize="small">
        <Form horizontal>
          <FormGroup className="formGroupCustom">
            <Col
              xsOffset={1}
              xs={10}
              smOffset={2}
              sm={8}
              mdOffset={3}
              md={6}
              lgOffset={2}
              lg={8}>
              <span className="font-color-grey">
                <strong>Email</strong>
              </span>
              <InputGroup>
                <FormControl
                  id="formControlsEmail"
                  type="email"
                  bsSize="large"
                  placeholder="Enter Email"
                  onChange={this.onChange}/>
                <InputGroup.Button>
                  <Button onClick={this.clearEmailField}>
                    <FontAwesome
                      className='super-crazy-colors'
                      name='user-times'
                      size='2x'
                      style={{
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}/>
                  </Button>
                </InputGroup.Button>
              </InputGroup>
              <HelpBlock>Your e-mail will be shared only with &nbsp;{this.formatCompanyName()}.</HelpBlock>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col
              xsOffset={1}
              xs={10}
              smOffset={2}
              sm={8}
              mdOffset={3}
              md={6}
              lgOffset={2}
              lg={8}>
              <Button bsStyle="primary" type="submit" onClick={this.onSubmit} block>Share</Button>
            </Col>
          </FormGroup>
        </Form>
      </Well>
      <ThankModal show={this.state.showModal} onHide={this.handleModal}/>
      </div>
    );
  }

}

export default EmailForm;

// Lütfen geçerli bir e-posta adresi gir. Şirketler buradan sana ulaşabileck.