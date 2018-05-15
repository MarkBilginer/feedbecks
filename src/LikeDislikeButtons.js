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
    }

    render() {
        const sharedProps = {
            container: this,
            target: this.getTarget,
            show: this.props.showError
        };

        return (
            <FormGroup
                className="formGroupCustom"
                ref={formGroup => {
                this.target = formGroup;
            }}>
                <Overlay {...sharedProps} placement="top">
                    <Tooltip placement="top" className="in customAlign-tooltip like-dislike" id="tooltip-top">
                        Tooltip Like/Dislike
                    </Tooltip>
                </Overlay>
                <Col
                    xsPull={1}
                    xsOffset={2}
                    xs={1}
                    smPull={0}
                    smOffset={4}
                    sm={1}
                    mdOffset={4}
                    md={1}
                    lgOffset={2}
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

                <Col
                    xsOffset={2}
                    xs={1}
                    smPush={0}
                    smOffset={2}
                    sm={1}
                    mdOffset={2}
                    md={1}
                    lgOffset={2}
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
                <Col xsOffset={2} xs={1}>
                    <FormControl.Feedback>
                        <div>
                            <svg className="input-error-svg-btn"></svg>
                        </div>
                    </FormControl.Feedback>
                </Col>
            </FormGroup>
        );
    }
}

export default LikeDislikeButtons;