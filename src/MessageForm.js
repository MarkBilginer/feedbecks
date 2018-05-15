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

class MessageForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.getTarget = this
            .getTarget
            .bind(this);
    }

    getTarget() {
        return ReactDOM.findDOMNode(this.target);
    }

    render() {
        const sharedProps = {
            target: this.getTarget,
            show: this.props.showMessageOverlay
        };

        return (
            <div>
                    <FormGroup
                        className="formGroupCustom"
                        ref={formGroup => {
                        this.target = formGroup;
                    }}
                        validationState={this.props.showValidationState}>
                        <Overlay {...sharedProps} container={this.refs.targetMessage} placement="top">
                            <Tooltip
                                placement="top"
                                className="in customAlign-Tooltip message"
                                id="tooltip-top">
                                Tooltip Message
                            </Tooltip>
                        </Overlay>
                        <Col
                            xsOffset={1}
                            xs={10}
                            smOffset={2}
                            sm={8}
                            mdOffset={3}
                            md={6}
                            lgOffset={2}
                            lg={8}>
                            <span className="inputTitle font-color-grey"><strong>Message</strong></span>
                            <div className="textarea-label-wrapper" ref="targetMessage">
                                <FormControl
                                    id="formControlsMessage"
                                    componentClass="textarea"
                                    maxLength={this.props.charsPerMessage}
                                    onChange={this.props.onChange}
                                    placeholder="Örnek"/>

                                <svg className="input-error-svg-textarea"></svg>

                                <Label id="count_message">0 / {this.props.charsPerMessage}</Label>
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
                            lgOffset={2}
                            lg={8}>
                            <Button bsStyle="primary" type="submit" onClick={this.props.onNext} block>Next</Button>
                        </Col>
                    </FormGroup>
            </div>
        )
    }
}

export default MessageForm;