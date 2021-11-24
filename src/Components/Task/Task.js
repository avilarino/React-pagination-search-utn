// requiero los metodos para definir los estados en react
import React, { useState, useEffect } from "react";

// requiero los componentes de las tareas de la misma carpeta
// cada componente representa una tarea
import { TaskBanner } from "./TaskBanner";
import { TaskRow } from "./TaskRow";
import { TaskCreator } from "./TaskCreator";
import { VisibilityControl } from "./VisibilityControl";


function Task() {
  const [userName, setUserName] = useState("usuario");
  const [taskItems, setTaskItems] = useState([
    { name: "Meditar", done: false },
    { name: "Hacer ejercicio", done: false },
    { name: "Escuchar mi podcast favorito", done: true }
   
  ]);
  const [showCompleted, setshowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem("Desafios");
    if (data != null) {
        setTaskItems(JSON.parse(data))
    } else {
          setUserName("agenda diaria");
          setTaskItems([
              { name: "Meditar", done: false },
              { name: "Hacer ejercicio", done: false },
              { name: "Escuchar mi podcast favorito", done: true },
              { name: "Estudiar", done: false }
          ]);
          setshowCompleted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = task =>
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  // recorremos las tareas hechas !!!!!
  const taskTableRows = doneValue =>
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <div className="container-fluid">
        <TaskCreator callback={createNewTask} />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Hecho</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(false)}</tbody>
        </table>
        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="Tareas Completadas"
            isChecked={showCompleted}
            callback={checked => setshowCompleted(checked)}
          />
        </div>
        {showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Tarea</th>
                <th>Hecho</th>
              </tr>
            </thead>
            <tbody>{taskTableRows(true)}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Task