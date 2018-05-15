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
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                  Contained Modal
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }

}

export default ThankModal;