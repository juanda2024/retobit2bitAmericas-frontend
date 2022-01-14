import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const newQuestion = () =>{
  return (
    <div>
<Form>
  <Form.Group className="mb-3" controlId="tittle">
    <Form.Label>Titulo</Form.Label>
    <Form.Control type="tittleTxt" placeholder="Dale un titulo a tu pregunta" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="detail">
    <Form.Label>Detalle</Form.Label>
    <Form.Control type="detailTxt" placeholder="Dar detalle de la pregunta" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Enviar
  </Button>
</Form>
    </div>
  );
}
export default newQuestion;