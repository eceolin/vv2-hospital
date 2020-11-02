import { Button, Form, Table } from "react-bootstrap";
import { Fragment, useState } from "react";

import '../../App.css';

function Rooms({ rooms, handleSubmit }) {
  const roomTypes = ["Pequena", "Grande", "Alto risco"];

  const [name, setName] = useState("");
  const [type, setType] = useState(roomTypes[0]);

  return (
    <Fragment>
      <Form className="form">
        <Form.Group controlId="formDoctor">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            value={name}
            onChange={({ target }) => setName(target.value)}
            type="text"
            placeholder="Nome"
          />
        </Form.Group>

        <Form.Group controlId="formDoctor">
          <Form.Label>Tipo</Form.Label>
          <Form.Control
            as="select"
            value={type}
            onChange={({ target }) => setType(target.value)}
            placeholder="Tipo"
          >
            {roomTypes.map((type) => (
              <option>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="info" onClick={() => addRoom(name, type, handleSubmit)}>
          Adicionar
        </Button>
      </Form>

      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(({ name, type }, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{name}</td>
                <td>{type}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Fragment>
  );
}

function addRoom(name, type, handleSubmit) {
  // verifies if input is correct
  if (name.length < 3 || !roomSizeIsValid(type)) { return }
  // calls handler if everything is correct
  handleSubmit({ name, type })
}

function roomSizeIsValid(name) {
  return name === "Pequena" || name === "Grande" || name === "Alto risco"
}

export default Rooms;
