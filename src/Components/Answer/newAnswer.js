import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const newAnswer = () =>{
  return (
    <div>
<Form>
  <Form.Group className="mb-3" controlId="response">
    <Form.Label>Respuesta</Form.Label>
    <Form.Control type="responseTxt" placeholder="Digita aquí tu respuesta" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Responder
  </Button>
</Form>
    </div>
  );
}
export default newAnswer;