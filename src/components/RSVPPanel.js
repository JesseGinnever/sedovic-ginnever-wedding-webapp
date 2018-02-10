import React, { Component } from 'react';
import '../App.css';
import {Panel, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Col, Row} from 'react-bootstrap';

class RSVPPanel extends Component {
  render() {
  function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

    return (
      <div className="RSVPPanel">
          <Panel>
              <Panel.Heading><b>Please RSPV to our wedding here!</b></Panel.Heading>
              <Panel.Body>
              <form>
                  <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <FieldGroup
                          id="formControlsText"
                          type="text"
                          label="Text"
                          placeholder="Enter text"
                        />
                    </Col>
                    <Col xs={6} md={4}>
                        <FieldGroup
                          id="formWeddingId"
                          type="email"
                          label="Wedding ID"
                          placeholder="Enter your Wedding ID here"
                        />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={6} md={6}>
                        <FieldGroup
                          id="formControlsEmail"
                          type="number"
                          label="Number in party"
                          placeholder="How many people are in your party?"
                        />
                    </Col>
                    <Col xs={6} md={6}>
                        <FieldGroup id="formControlsPassword" label="Password" type="password" />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                      <Button type="submit">Submit</Button>
                  </Row>
                </form>
              </Panel.Body>
          </Panel>
      </div>
      );
  }
}

export default RSVPPanel;