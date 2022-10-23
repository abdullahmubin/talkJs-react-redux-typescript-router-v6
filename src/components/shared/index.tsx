import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

export interface notificationMss {
    val: {
        show: boolean, message: string
    }
}

const Shared: React.FC<notificationMss[`val`]> = ({show, message}) => {
  const [showw, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(show)
  }, [show])

  
  return (
    <Row>
      <Col>
        <Toast onClose={() => setShow(false)} show={showw} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Talk.Js</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>
      
    </Row>
  );
}

export default Shared;