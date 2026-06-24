import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import ParticipantList from "./components/ParticipantList";
import "./App.css";

function App() {
  const [participants, setParticipants] = useState([]);
  const [message, setMessage] = useState("");

  const addParticipant = (participant) => {
    const exists = participants.find(
      (p) => p.email === participant.email
    );

    if (exists) {
      setMessage("Participant already registered!");
      return;
    }

    setParticipants([...participants, participant]);
    setMessage(
      `Registration Successful! Confirmation sent to ${participant.email}`
    );
  };

  return (
    <div className="container">
      <h1>Workshop Registration System</h1>

      <RegistrationForm addParticipant={addParticipant} />

      {message && <p className="message">{message}</p>}

      <ParticipantList participants={participants} />
    </div>
  );
}

export default App;