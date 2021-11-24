import React from "react";

// hacemos las filas de las tablas de las tareas 
// vamos a retornar los props 


export const TaskRow = props => (
  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={() => props.toggleTask(props.task)}
      />
    </td>
  </tr>
);