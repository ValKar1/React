import React, {useState} from "react";

export function App1() {
  const tasks = [
    {id: 123, taskText: "React lernen"},
    {id: 456, taskText: "Mit dem Hund Gassi gehen"},
    {id: 789, taskText: "Obst essen"},
    {id: 1011, taskText: "Brot kaufen"}
  ];

  return (
    <div>
      <h1>Meine heutigen Tasks:</h1>

      <ul>
        {tasks.map((taskObj, index) => ( // Index vermeiden (bei push in array kann sich auch index ändern)
          <li key={taskObj.id}>{taskObj.taskText}</li>
        ))}
      </ul>
    </div>
  )
}
