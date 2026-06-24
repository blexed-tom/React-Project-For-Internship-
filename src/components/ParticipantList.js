import React from "react";

function ParticipantList({ participants }) {
  return (
    <div className="list-container">
      <h2>Registered Participants</h2>

      {participants.length === 0 ? (
        <p>No registrations yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Workshop</th>
            </tr>
          </thead>

          <tbody>
            {participants.map((participant, index) => (
              <tr key={index}>
                <td>{participant.name}</td>
                <td>{participant.email}</td>
                <td>{participant.workshop}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ParticipantList;