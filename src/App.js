import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./App.css";
import Doctors from "./containers/Doctors";
import Reservations from "./containers/Reservations";
import Rooms from "./containers/Rooms";

function App() {
  const [step, setStep] = useState("doctors");
  const [doctors, setDoctors] = useState([
    {name: "Luiz Guerra", crm: "157", specialty: "Cardiologista"},
    {name: "Eduardo Ceolin", crm: "194", specialty: "Dermatologista"},
    {name: "Leonardo Malheiros", crm: "273", specialty: "Neurologista"}
  ]);
  const [rooms, setRooms] = useState([
    {name: "Hera", type: "Pequena"},
    {name: "Demeter", type: "Grande"},
    {name: "Hestia", type: "Alto-Risco"},
    {name: "Hephaestus", type: "Alto-Risco"}
  ]);
  const [reservations, setReservations] = useState([]);

  const changeStep = (newStep) => {
    setStep(newStep);
  };

  const addDoctor = (doctor) => {
    setDoctors((doctors) => [...doctors, doctor]);
  };

  const addRoom = (room) => {
    setRooms((rooms) => [...rooms, room]);
  };

  const addReservation = (reservation) => {
    setReservations((reservations) => [...reservations, reservation]);
  };

  return (
    <Fragment>
      <ButtonGroup className="buttons">
        <Button variant="outline-info" onClick={() => changeStep("rooms")}>
          Ir para salas
        </Button>
        <Button variant="outline-info" onClick={() => changeStep("doctors")}>
          Ir para médicos
        </Button>
        <Button variant="outline-info" onClick={() => changeStep("reservations")}>
          Ir para reservas
        </Button>
      </ButtonGroup>

      {step === "doctors" && (
        <Doctors doctors={doctors} handleSubmit={addDoctor} />
      )}
      {step === "rooms" && <Rooms rooms={rooms} handleSubmit={addRoom} />}
      {step === "reservations" && (
        <Reservations
          reservations={reservations}
          doctors={doctors}
          rooms={rooms}
          handleSubmit={addReservation}
        />
      )}
    </Fragment>
  );
}

export default App;
