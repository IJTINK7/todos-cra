import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import {Checkbox} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
  changeTaskStatusActionCreator,
  countActiveTasksActionCreator,
  FilterType,
  TaskType
} from "../store/todolist-reducer";
import {AppRootStateType} from "../store/store";
import * as Styled from "./TasksBar.styles";


export const TasksBar = () => {
  const tasks = useSelector<AppRootStateType, TaskType[]>(state => state.todolist.tasksData)
  const filter = useSelector<AppRootStateType, FilterType>(state => state.todolist.filter)
  const dispatch = useDispatch()
  const onChangeTaskStatusHandler = (taskId: string, isDone: boolean) => {
    dispatch(changeTaskStatusActionCreator(taskId, isDone))
    dispatch(countActiveTasksActionCreator())
  }
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') {
      return !task.isDone;
    }
    if (filter === 'completed') {
      return task.isDone;
    }
    return true
  });

  return (
    <div>
      {filteredTasks.map(el => {
        return (
          <Styled.List key={el.id}>
            <Styled.ListItem isDone={el.isDone}>
              <Checkbox icon={<RadioButtonUncheckedIcon fontSize="large"/>}
                        checkedIcon={<CheckCircleOutlinedIcon fontSize="large" color="success"/>}
                        checked={el.isDone} onChange={() => onChangeTaskStatusHandler(el.id, el.isDone)}/>
              <Styled.TaskTitle>{el.title}</Styled.TaskTitle>
              <Styled.Hr/>
            </Styled.ListItem>
          </Styled.List>
        )
      })}
    </div>
  );
};