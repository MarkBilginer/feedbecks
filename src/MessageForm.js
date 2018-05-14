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
            container: this,
            target: this.getTarget,
            show: this.props.showMessageOverlay
        };

        return (
            <FormGroup
                className="formGroupCustom"
                ref={formGroup => {
                this.target = formGroup;
            }}
                validationState={this.props.showValidationState}>
                <Overlay {...sharedProps} placement="top">
                    <Tooltip placement="top" className="in customAlign-Tooltip" id="tooltip-top">
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
                    {"Message"}
                    <div className="textarea-label-wrapper">
                        <FormControl
                            componentClass="textarea"
                            maxLength={this.props.charsPerMessage}
                            onChange={this.props.onChange}
                            placeholder="Örnek"/>

                        <svg className="input-error-svg-textarea"></svg>

                        <Label id="count_message">0 / {this.props.charsPerMessage}</Label>
                    </div>
                </Col>
            </FormGroup>
        )
    }
}

export default MessageForm;