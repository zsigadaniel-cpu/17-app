import { Task } from "./task";
import { Droppable, Draggable } from "react-beautiful-dnd";
export const Column = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          className="box"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <h3 {...provided.dragHandleProps} style={{ padding: "8px" }}>
            {column.title}
          </h3>
          <Droppable
            droppableId={column.id}
            type="tasks"
            direction="horizontal"
          >
            {(provided) => (
              <div
                className="task-container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
