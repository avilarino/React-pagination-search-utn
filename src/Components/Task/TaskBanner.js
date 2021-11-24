import React from "react";

export const TaskBanner = props => (
  <h4 className="bg-secondary text-white text-center p-4">
    {props.taskItems.filter(t => !t.done).length}{" "}
    tareas por hacer
  </h4>
);