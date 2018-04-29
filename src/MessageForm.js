import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import {Form, Button} from 'react-bootstrap';
import './fonts/fontawesome-free-5.0.8/web-fonts-with-css/css/fontawesome-all.min.css'
import EmailForm from './EmailForm'
import store from './store.js';
import {addToFormId} from './actions/formid-actions';

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

    countWord = (e) => {
        var currentText = e.target.value;
        // Now we need to recalculate the number of characters that have been typed in so
        // far
        var characterCount = currentText.length;
        var l_charsLeft = this.state.charsPerMessage - characterCount;
        this.setState({'charsLeft': l_charsLeft});
    }

    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state,
        // it's super easy to update the state if (this.state.charsLeft === 0) { } else
        // if(this.state.charsLeft === 280){ }
        const textarea_tooltip_error = document.querySelector('.customtooltip.textarea.error');
        const textarea_input_error = document.querySelector('textarea.input.error');
        const input_svg_error = document.querySelector('.input-error-svg-textarea.error');

        if (textarea_tooltip_error && textarea_input_error && input_svg_error) {
            this.IndexFormRemoveError('textarea');
        }

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
        console.log('sending request to: https://api.dusuncembu.com/'
                        + this.props.companyName +
                        '/consumer/submitForm');
        request
            .post('https://api.dusuncembu.com/'+ this.props.companyName +'/consumer/submitForm')
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
            <EmailForm companyName={this.props.companyName}/>,
                 document.getElementById('main'));

    }

    checkLike(e) {
        e.preventDefault();

        const container_btn_error = document.querySelector('.container-btn.error');
        const input_svg_error = document.querySelector('.input-error-svg-btn.error');
        const btn_tooltip_error = document.querySelector('.customtooltip.like-dislike.error');

        if (container_btn_error && input_svg_error && btn_tooltip_error) {
            this.IndexFormRemoveError('like-dislike');
        }

        if(this.state.isLiked === true){
            this.setState({isLiked: '', 
                            likeBtnColour: "rgba(1, 22, 39, 1)"
                        });
        } else if(this.state.isLiked === false) {
            this.setState({isLiked: true, 
                            likeBtnColour: "#365899",
                            dislikeBtnColour: "rgba(1, 22, 39, 1)"
                        });
        }else {
            this.setState({isLiked: true, 
                            likeBtnColour: "#365899",
                            dislikeBtnColour: "rgba(1, 22, 39, 1)"
                        });
        }
    }

    checkDislike(e) {
        e.preventDefault();

        const container_btn_error = document.querySelector('.container-btn.error');
        const input_svg_error = document.querySelector('.input-error-svg-btn.error');
        const btn_tooltip_error = document.querySelector('.customtooltip.like-dislike.error');

        if (container_btn_error && input_svg_error && btn_tooltip_error) {
            this.IndexFormRemoveError('like-dislike');
        }

        if(this.state.isLiked === true){
            this.setState({isLiked: false, 
                likeBtnColour: "rgba(1, 22, 39, 1)",
                dislikeBtnColour: "#9b3659"
            });
        } else if(this.state.isLiked === false) {
            this.setState({isLiked: '',
                dislikeBtnColour: "rgba(1, 22, 39, 1)"
            });
        }else {
            this.setState({isLiked: false, 
                            likeBtnColour: "rgba(1, 22, 39, 1)",
                            dislikeBtnColour: "#9b3659"
                        });
        }
    }

    render() {
        return (
            <Form className="main-form">
                <div className="container-btn">
                    <div className="customtooltip like-dislike">
                        <span className="customtooltiptext like-dislike">
                            Lütfen beğenip beğenmediğini seç.
                        </span>
                    </div>
                    <i
                        className="main-form-btn mr fas fa-thumbs-down"
                        style={{
                        color: this.state.dislikeBtnColour,
                        visibility: "visible"
                    }}
                        onClick={this.checkDislike}> 
                        <span className="text"> Dislike</span>
                    </i>

                    <i
                        className="main-form-btn fas fa-thumbs-up"
                        style={{
                        color: this.state.likeBtnColour,
                        visibility: "visible"
                    }}
                        onClick={this.checkLike}> 
                        <span className="text"> Like</span>
                    </i>
                    <span>
                        <svg className="input-error-svg-btn"></svg>
                    </span>

                </div>

                <div className="wrap-input">
                    <div className="customtooltip textarea">
                        <span className="customtooltiptext textarea">
                            İyi veya kötü bir değerlendirme yaz, İşletmeler neyi iyi ve kötü yaptıklarını
                            öğrensinler.
                        </span>
                    </div>
                    <textarea
                        className="input form-validate"
                        onChange={this.onChange}
                        maxLength='280'
                        placeholder="Görüşünüz bizim için önemli"></textarea>

                    <span>
                        <svg className="input-error-svg-textarea"></svg>
                    </span>
                </div>

                <span id='wordcount'>{this.state.charsLeft}</span>

                <div className="container-main-form-btn">

                    <Button className="main-form-btn-next" onClick={this.onNext}>
                        İleri
                    </Button>

                </div>
        </Form>/* main form*/
        );
    }
}

export default MessageForm;