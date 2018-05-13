import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import $ from 'jquery';
import {
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Col,
    Button,
    Tooltip,
    Well,
    Label,
    HelpBlock
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
// import
// './fonts/fontawesome-free-5.0.8/web-fonts-with-css/css/fontawesome-all.min.css
// '
import EmailForm from './EmailForm'
import store from './store.js';
import {addToFormId} from './actions/formid-actions';
import audioPop1 from './sounds/pop1.mp3';
import audioPop2 from './sounds/pop2.mp3';
import 'font-awesome/css/font-awesome.min.css';
// import LikeDisklikeAnimation from './animations/LikeDislikeAnimation';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: null,
            userText: '',
            formID: '',
            charsPerMessage: 280,
            charsLeft: 280,
            notificationText: '',
            likeBtnColour: "rgba(1, 22, 39, 1)",
            dislikeBtnColour: "rgba(1, 22, 39, 1)"
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
        var text_max = 200;
        $('#formControlsMessage').keyup(function() {
        var text_length = $('#formControlsMessage').val().length;
        var text_remaining = text_max - text_length;
        
        $('#count_message').html(text_length + ' / ' + text_max);
        });

        var currentText = e.target.value;
        // Now we need to recalculate the number of characters that have been typed in
        // so far
        var characterCount = currentText.length;
        var l_charsLeft = this.state.charsPerMessage - characterCount;
        this.setState({'charsLeft': l_charsLeft});
    }

    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state,
        // it's super easy to update the state if (this.state.charsLeft === 0) { } else
        // if(this.state.charsLeft === 280){ }

        // const textarea_tooltip_error = document.querySelector('.customtooltip.textarea.error');
        // const textarea_input_error = document.querySelector('textarea.input.error');
        // const input_svg_error = document.querySelector('.input-error-svg-textarea.error');

        // if (textarea_tooltip_error && textarea_input_error && input_svg_error) {
        //     this.IndexFormRemoveError('textarea');
        // }

        this.countWord(e);
        var userText = this.state.userText;
        userText = e.target.value;
        this.setState({'userText': userText});
    }

    IndexFormAddError(string) {

        switch (string) {
            case 'like-dislike':
                document
                    .querySelector(".container-btn")
                    .classList
                    .add("error");
                document
                    .querySelector(".input-error-svg-btn")
                    .classList
                    .add("error");
                document
                    .querySelector(".customtooltip.like-dislike")
                    .classList
                    .add("error");
                break;
            case 'textarea':
                document
                    .querySelector(".customtooltip.textarea")
                    .classList
                    .add("error");
                document
                    .querySelector("textarea.input")
                    .classList
                    .add("error");
                document
                    .querySelector(".input-error-svg-textarea")
                    .classList
                    .add("error");
                break;
            default:
                break;
        }
    }

    IndexFormRemoveError(string) {

        switch (string) {
            case 'like-dislike':
                document
                    .querySelector(".container-btn")
                    .classList
                    .remove("error");
                document
                    .querySelector(".input-error-svg-btn")
                    .classList
                    .remove("error");
                document
                    .querySelector(".customtooltip.like-dislike")
                    .classList
                    .remove("error");
                break;
            case 'textarea':
                document
                    .querySelector(".customtooltip.textarea")
                    .classList
                    .remove("error");
                document
                    .querySelector("textarea.input")
                    .classList
                    .remove("error");
                document
                    .querySelector(".input-error-svg-textarea")
                    .classList
                    .remove("error");
                break;
            default:
                break;
        }
    }

    onNext = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {isLiked, userText} = this.state;

        if (this.state.isLiked === null) {
            //add error classes for visualization if the person hasnt liked yet
            this.IndexFormAddError('like-dislike');
            return;
        } else if (this.state.userText.length === 0) {
            //add error classes for visualization if the message is empty
            this.IndexFormAddError('textarea');
            return;
        }
        console.log('sending request to: https://api.dusuncembu.com/' + this.props.companyName + '/consumer/submitForm');
        request
            .post('https://api.dusuncembu.com/' + this.props.companyName + '/consumer/submitForm')
            .send({'userText': userText, 'isLiked': isLiked}) // sends a JSON post body
            .set('Content-Type', "application/x-www-form-urlencoded")
            .timeout({deadline: 10000}) // if there is no response after 10 seconds abort
            .then(response => {
                // Calling the end function will send the request
                const responseParsed = JSON.parse(response.text);
                // console.log(JSON.stringify(responseObject)); this.setState({formID:
                // responseObject.extras.formID});
                store.dispatch(addToFormId(responseParsed.extras.formID));
                var stateLength = store
                    .getState()
                    .formId
                    .length;
                console.log(store.getState().formId[stateLength - 1]);
            });
        //.catch(function(err){ alert('error'); });

        ReactDOM.render(
            <EmailForm companyName={this.props.companyName}/>, document.getElementById('main'));

    }

    checkLike(e) {
        e.preventDefault();

        let pop1 = new Audio(audioPop1);
        let pop2 = new Audio(audioPop2);

        const container_btn_error = document.querySelector('.container-btn.error');
        const input_svg_error = document.querySelector('.input-error-svg-btn.error');
        const btn_tooltip_error = document.querySelector('.customtooltip.like-dislike.error');

        if (container_btn_error && input_svg_error && btn_tooltip_error) {
            this.IndexFormRemoveError('like-dislike');
        }

        if (this.state.isLiked === true) {
            this.setState({isLiked: null, likeBtnColour: "rgba(1, 22, 39, 1)"});
            pop2.play();

        } else if (this.state.isLiked === false) {
            this.setState({isLiked: true, likeBtnColour: "#365899", dislikeBtnColour: "rgba(1, 22, 39, 1)"});
            pop1.play();

        } else {
            this.setState({isLiked: true, likeBtnColour: "#365899", dislikeBtnColour: "rgba(1, 22, 39, 1)"});
            pop1.play();

        }
    }

    checkDislike(e) {
        e.preventDefault();

        let pop1 = new Audio(audioPop1);
        let pop2 = new Audio(audioPop2);

        const container_btn_error = document.querySelector('.container-btn.error');
        const input_svg_error = document.querySelector('.input-error-svg-btn.error');
        const btn_tooltip_error = document.querySelector('.customtooltip.like-dislike.error');

        if (container_btn_error && input_svg_error && btn_tooltip_error) {
            this.IndexFormRemoveError('like-dislike');
        }

        if (this.state.isLiked === true) {
            this.setState({isLiked: false, likeBtnColour: "rgba(1, 22, 39, 1)", dislikeBtnColour: "#9b3659"});
            pop1.play();

        } else if (this.state.isLiked === false) {
            this.setState({isLiked: null, dislikeBtnColour: "rgba(1, 22, 39, 1)"});
            pop2.play();

        } else {
            this.setState({isLiked: false, likeBtnColour: "rgba(1, 22, 39, 1)", dislikeBtnColour: "#9b3659"});
            pop1.play();
        }
    }

    render() {
        return (
            <Well bsSize="small">
                <Form horizontal>
                    <FormGroup>
                        <Tooltip placement="top" className="in" id="tooltip-top">
                            Tooltip top
                        </Tooltip>
                        <Col
                            xsOffset={3}
                            xs={1}
                            smOffset={4}
                            sm={1}
                            mdOffset={4}
                            md={1}
                            lgOffset={5}
                            lg={1}>
                            <Button>
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='thumbs-o-up'
                                    size='2x'
                                    style={{
                                    textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                                }}/> {' '}Like &nbsp; &nbsp;
                            </Button>
                        </Col>
                        {/* lg doesnt solve problem */}
                        <Col
                            xsOffset={2}
                            xs={1}
                            smOffset={2}
                            sm={1}
                            mdOffset={2}
                            md={1}
                            lgOffset={0}
                            lg={1}>
                            <Button>
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='thumbs-o-down'
                                    size='2x'
                                    style={{
                                    textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                                }}/> {' '}Dislike
                            </Button>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formControlsMessage">
                        <Tooltip placement="left" className="in" id="tooltip-left">
                            Tooltip left
                        </Tooltip>
                        <Col
                            xsOffset={1}
                            xs={10}
                            smOffset={2}
                            sm={8}
                            mdOffset={3}
                            md={6}
                            lgOffset={4}
                            lg={4}>
                            {"Message"}
                            <div className="textarea-label-wrapper">
                                <FormControl
                                    componentClass="textarea"
                                    maxLength="280"
                                    onChange={this.onChange}
                                    placeholder="Örnek"/>
                                <Label id="count_message">0 / 200</Label>
                            </div>
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
                            lgOffset={4}
                            lg={4}>
                            <Button bsStyle="primary" type="submit" block>Next</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Well>
        );
    }
}

export default MessageForm;