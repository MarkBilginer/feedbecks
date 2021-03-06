import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import $ from 'jquery';
import {
    Form,
    Well,
} from 'react-bootstrap';
// import
// './fonts/fontawesome-free-5.0.8/web-fonts-with-css/css/fontawesome-all.min.cs
// s '
import MessageForm from './MessageForm';
import EmailForm from './EmailForm';
import LikeDislikeButtons from './LikeDislikeButtons';
import Store from './Store.js';
import {addToFormId} from '../actions/formid-actions';
import audioPop1 from '../sounds/pop1.mp3';
import audioPop2 from '../sounds/pop2.mp3';
import 'font-awesome/css/font-awesome.min.css';
// import LikeDisklikeAnimation from './animations/LikeDislikeAnimation';

class CustomerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: null,
            userText: '',
            formID: '',
            charsPerMessage: 280,
            validationState: [
                {
                    message: null,
                    likeDislike: null
                }
            ],
            likeBtnColour: "rgb(97, 103, 112)",
            dislikeBtnColour: "rgb(97, 103, 112)"
        };
        this.onNext = this
            .onNext
            .bind(this);
        this.checkLike = this
            .checkLike
            .bind(this);
        this.checkDislike = this
            .checkDislike
            .bind(this);
        this.onChange = this
            .onChange
            .bind(this);
        this.countWord = this
            .countWord
            .bind(this);
    }

    componentDidMount() {
        // LikeDisklikeAnimation();
    }

    countWord = (e) => {
        var text_max = this.state.charsPerMessage;
        $('#formControlsMessage').keydown(function () {
            var text_length = $('#formControlsMessage')
                .val()
                .length;
            // var text_remaining = text_max - text_length;

            $('#count_message').html(text_length + ' / ' + text_max);
        });
    }

    onChange = (e) => {
        this.countWord(e);
        var userText = this.state.userText;
        userText = e.target.value;

        if (userText !== '') {
            this.showMessageOverlay = false;
            let validationStateCopy = JSON.parse(JSON.stringify(this.state.validationState))
            //make changes to ingredients
            validationStateCopy[0].message = null;
            this.showValidationState = validationStateCopy[0].message;
            document
                .querySelector(".input-error-svg-textarea")
                .classList
                .remove("error");
        }

        this.setState({'userText': userText});
    }

    onNext = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {isLiked, userText} = this.state;

        this.showMessageOverlay = false;

        if (this.state.isLiked === null) {
            // add error classes for visualization if the person hasnt liked yet
            document
                .querySelector(".input-error-svg-btn")
                .classList
                .add("error");
            let validationStateCopy = JSON.parse(JSON.stringify(this.state.validationState))
            //make changes to ingredients
            validationStateCopy[0].likeDislike = "error";
            this.setState({validationState: validationStateCopy});
            return;
        } else if (this.state.isLiked !== null) {
            let validationStateCopy = JSON.parse(JSON.stringify(this.state.validationState))
            //make changes to ingredients
            validationStateCopy[0].likeDislike = "null";
            this.setState({validationState: validationStateCopy});
        }

        if (this.state.userText === '') {
            // add error classes for visualization if the message is empty
            this.showMessageOverlay = true;
            document
                .querySelector(".input-error-svg-textarea")
                .classList
                .add("error");
            let validationStateCopy = JSON.parse(JSON.stringify(this.state.validationState))
            //make changes to ingredients
            validationStateCopy[0].message = "error";
            this.showValidationState = validationStateCopy[0].message;
            return;
        }

        let companyName = this.props.companyName;
        if(this.props.companyName == 'ozukuaf\%C3\%B6r') {
            companyName = 'ozukuafor'
        }
        // console.log('sending request to: https://api.dusuncembu.com/' + this.props.companyName + '/consumer/submitForm');
        request
            .post('https://api.dusuncembu.com/' + companyName + '/consumer/submitForm')
            .send({'userText': userText, 'isLiked': isLiked}) // sends a JSON post body
            .set('Content-Type', "application/x-www-form-urlencoded")
            .timeout({deadline: 10000}) // if there is no response after 10 seconds abort
            .then(response => {
                // Calling the end function will send the request
                const responseParsed = JSON.parse(response.text);
                // console.log(JSON.stringify(responseObject)); this.setState({formID:
                // responseObject.extras.formID});
                Store.dispatch(addToFormId(responseParsed.extras.formID));
                // var stateLength = store
                //     .getState()
                //     .formId
                //     .length;
                // console.log(store.getState().formId[stateLength - 1]);
            });
        //.catch(function(err){ alert('error'); });

        ReactDOM.render(
            <EmailForm companyName={this.props.companyName}/>, document.getElementById('main'));

    }

    checkLike(e) {
        e.preventDefault();

        let pop1 = new Audio(audioPop1);
        let pop2 = new Audio(audioPop2);

        if (this.state.isLiked === true) {
            this.setState({isLiked: null, likeBtnColour: "rgb(97, 103, 112)"});
            pop2.play();

        } else if (this.state.isLiked === false) {
            this.setState({isLiked: true, likeBtnColour: "#365899", dislikeBtnColour: "rgb(97, 103, 112)"});
            pop1.play();

        } else {
            this.setState({isLiked: true, likeBtnColour: "#365899", dislikeBtnColour: "rgb(97, 103, 112)"});
            let validationStateCopy = JSON.parse(JSON.stringify(this.state.validationState));
            //make changes to ingredients
            validationStateCopy[0].likeDislike = false;
            this.setState({validationState: validationStateCopy});
            pop1.play();

            document
                .querySelector(".input-error-svg-btn")
                .classList
                .remove("error");

        }
    }

    checkDislike(e) {
        e.preventDefault();

        let pop1 = new Audio(audioPop1);
        let pop2 = new Audio(audioPop2);

        if (this.state.isLiked === true) {
            this.setState({isLiked: false, likeBtnColour: "rgb(97, 103, 112)", dislikeBtnColour: "#9b3659"});
            pop1.play();

        } else if (this.state.isLiked === false) {
            this.setState({isLiked: null, dislikeBtnColour: "rgb(97, 103, 112)"});
            pop2.play();

        } else {
            this.setState({isLiked: false, likeBtnColour: "rgb(97, 103, 112)", dislikeBtnColour: "#9b3659"});
            let validationStateCopy = JSON.parse(JSON.stringify(this.state.validationState))
            //make changes to ingredients
            validationStateCopy[0].likeDislike = false;
            this.setState({validationState: validationStateCopy});
            pop1.play();

            document
                .querySelector(".input-error-svg-btn")
                .classList
                .remove("error");
        }
    }

    render() {
        const showError = this.state.validationState[0]['likeDislike'] === "error"
            ? true
            : false;

        return (
            <Well bsSize="small">
                <Form horizontal>
                    <LikeDislikeButtons
                        checkLike={this.checkLike}
                        checkDislike={this.checkDislike}
                        likeBtnColour={this.state.likeBtnColour}
                        dislikeBtnColour={this.state.dislikeBtnColour}
                        showError={showError}/>
                    <MessageForm
                        charsPerMessage={this.state.charsPerMessage}
                        onChange={this.onChange}
                        showMessageOverlay={this.showMessageOverlay}
                        showValidationState={this.showValidationState}
                        onNext={this.onNext}/>
                </Form>
            </Well>
        );
    }
}

export default CustomerInput;