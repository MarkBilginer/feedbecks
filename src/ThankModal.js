import React from 'react';
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
    HelpBlock,
    Modal
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class ThankModal extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={this.props.onHide}
                    container={this}
                    aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            <FontAwesome
                                className='font-color-gold'
                                name='trophy'
                                size='2x'
                                style={{
                                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                            }}/> {' '}
                            Many thanks!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="font-color-grey">
                        Your feedback will from now on be seen by the company managers.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

export default ThankModal;