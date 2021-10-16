import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";
import plusIcon from "../../img/plus.svg";
import TaskItem from "../TaskItem/taskItem";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  onTaskUptade,
  taskState,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map(function (task) {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUptade={onTaskUptade}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista vazia</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="Plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

//Definindo tipos das props
TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
