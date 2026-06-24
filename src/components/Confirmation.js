import React from "react";

function Confirmation({ userData }) {
  const id = "WR" + Math.floor(Math.random() * 10000);

  return (
    <div className="success">
      <h2>Registration Successful ✅</h2>

      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Workshop: {userData.workshop}</p>

      <h3>Confirmation ID: {id}</h3>
    </div>
  );
}

export default Confirmation;