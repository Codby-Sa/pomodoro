import { initialTaskState } from "./initialTaskState";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { createContext } from "react";
import type { TaskAction } from "./taskActions";

type TaskContextProps = {
    state: TaskStateModel; 
    dispatch: React.Dispatch<TaskAction>;
}

const initialContextValue = {
    state: initialTaskState,
    dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
