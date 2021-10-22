import React, { useState } from "react";
import Proptypes from "prop-types";
import "./taskItem.css";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUptade,
  onDeleteTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const OnTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle((existingEditableTitle) => {
      return newTitle;
    });
    onTaskUptade(id, newTitle, taskState);
  };

  const onkeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };


  const onTaskState = (event) => {
    onTaskUptade(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className= "task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={OnTitleChange}
          onKeyPress={onkeyPress}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
           <button onClick={(e) => onDeleteTask(id)} className="btn">
           X
           </button>
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}
        
        </div>
        <select onChange={onTaskState} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completo">Completo</option>
        </select>

      </div>

    );
  }
}

TaskItem.proptypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  taskState: Proptypes.string.isRequired
};
