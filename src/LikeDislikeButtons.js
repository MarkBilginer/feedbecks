import React from 'react';
import ReactDOM from 'react-dom';
import {
    Form,
    FormGroup,
    FormControl,
    Col,
    Button,
    Tooltip,
    Well,
    Label,
    Overlay
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class LikeDislikeButtons extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.getTarget = this
            .getTarget
            .bind(this);
    }

    getTarget() {
        return ReactDOM.findDOMNode(this.target);
    }

    componentWillUpdate() {
        // let initialState= (this.props.showError === "error" ? true : false);
        // this.setState( {     show: initialState });
        console.log("child: " + this.props.showError);
        console.log(typeof this.props.showError);
        console.log(JSON.stringify(this.props.showError));
        // console.log(this.state.show);
    }

    render() {
        const sharedProps = {
            container: this,
            target: this.getTarget,
            show: this.props.showError
        };

        return (
            <FormGroup
                className="formGroupLikeDislike"
                ref={formGroup => {
                this.target = formGroup;
            }}>
                <Overlay {...sharedProps} placement="top">
                    <Tooltip placement="top" className="in" id="tooltip-top">
                        Tooltip Like/Dislike
                    </Tooltip>
                </Overlay>
                <Col
                    xsOffset={3}
                    xs={1}
                    smOffset={4}
                    sm={1}
                    mdOffset={4}
                    md={1}
                    lgOffset={5}
                    lg={1}>
                    <Button onClick={this.props.checkLike}>
                        <FontAwesome
                            className='super-crazy-colors'
                            name='thumbs-o-up'
                            size='2x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
                            color: this.props.likeBtnColour
                        }}/> {' '}
                        <span
                            style={{
                            color: this.props.likeBtnColour
                        }}>
                            <strong>Like</strong>
                            &nbsp; &nbsp; &nbsp;
                        </span>
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
                    <Button onClick={this.props.checkDislike}>
                        <FontAwesome
                            className='super-crazy-colors'
                            name='thumbs-o-down'
                            size='2x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
                            color: this.props.dislikeBtnColour
                        }}/> {' '}
                        <span
                            style={{
                            color: this.props.dislikeBtnColour
                        }}>
                            <strong>Dislike</strong>
                        </span>
                    </Button>
                </Col>
                {/* needs to be fixed */}
                <Col xsOffset={1} xs={1}>
                    <FormControl.Feedback>
                        <span>
                            <svg className="input-error-svg-btn"></svg>
                        </span>
                    </FormControl.Feedback>
                </Col>
                {/* <FormControl.Feedback>
                            <Glyphicon glyph="music" />
                        </FormControl.Feedback> */}
            </FormGroup>
        );
    }
}

export default LikeDislikeButtons;