import { useState, createContext, useReducer } from "react";
import { initialData } from "./initial-data";
import { Column } from "./column";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const GraphContext = createContext([null, () => {}]);

export const GraphConcept = () => {
  const [data, setData] = useState(initialData);

  const reducer = (state, action) => {
    if (action.type === "CHANGE TYPE") {
      const tasksCopy = state.tasks;
      tasksCopy[action.payload.task].content = action.payload.graphType;
      setData({ ...data, task: tasksCopy });
      return { tasks: tasksCopy };
    }
    if (action.type === "CLOSE CHART") {
      const tasksCopy = state.tasks;
      tasksCopy[action.payload.task].display = false;
      setData({ ...data, task: tasksCopy });
      return { tasks: tasksCopy };
    }
    if (action.type === "ZOOM CHART") {
      const tasksCopy = state.tasks;
      tasksCopy[action.payload.task].forward = !tasksCopy[action.payload.task]
        .forward;
      setData({ ...data, task: tasksCopy });
      return { tasks: tasksCopy };
    }
    return state;
  };

  const GraphContextProvider = ({ children }) => (
    <GraphContext.Provider value={useReducer(reducer, data)}>
      {children}
    </GraphContext.Provider>
  );

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(data.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...data,
        columnOrder: newColumnOrder,
      };
      setData(newState);
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newState);
      return;
    }

    const startTasksIds = Array.from(start.taskIds);
    startTasksIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTasksIds,
    };

    const finishTasksIds = Array.from(finish.taskIds);
    finishTasksIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTasksIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newState);
  };

  const showAll = () => {
    const newSate = { ...data };
    for (const key in newSate.tasks) {
      newSate.tasks[key].display = true;
    }
    setData(newSate);
  };

  const InnerList = ({ column, taskMap, index }) => {
    const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  };

  return (
    <GraphContextProvider>
      <DragDropContext onDragEnd={onDragEnd}>
        <button className="show-all" onClick={() => showAll()}>
          Show all
        </button>
        <Droppable droppableId="all-columns" type="column">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="container-graph"
            >
              {data.columnOrder.map((columnId, index) => {
                const column = data.columns[columnId];

                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    taskMap={data.tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </GraphContextProvider>
  );
};
