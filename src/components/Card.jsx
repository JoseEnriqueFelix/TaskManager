import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ description }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-header">Task Manager</div>
      <ul className="list-group list-group-flush">
        {Array.isArray(description) ? (
          description.length === 0 ? (
            <li className="list-group-item">No items found</li>
          ) : (
            description.map(desc => <li className="list-group-item" key={desc}> {desc} </li>)
          )
        ) : (
          <li className="list-group-item">Invalid description</li>
        )}
      </ul>
      <div className="card-footer">Card footer</div>
    </div>
  );
}

export default Card;
