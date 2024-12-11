import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {
  changeFilterActionCreator,
  clearCompletedTasksActionCreator,
  countActiveTasksActionCreator,
  FilterType
} from "../store/todolist-reducer";
import * as Styled from "./ControlBar.styles";


export const ControlBar = () => {
  const activeTasksCount = useSelector<AppRootStateType, number>(state => state.todolist.activeItemsCount)
  const filter = useSelector<AppRootStateType, FilterType>(state => state.todolist.filter)
  const dispatch = useDispatch()
  const changeFilterHandler = (filterValue: FilterType) => {
    dispatch(changeFilterActionCreator(filterValue))
  }
  const clearCompletedTasksHandler = () => {
    dispatch(clearCompletedTasksActionCreator())
    dispatch(countActiveTasksActionCreator())
  }
  return (
    <Styled.ControlBarWrapper>
      <Styled.ControlBarItemsCount>{activeTasksCount} item(s) left</Styled.ControlBarItemsCount>
      <Styled.ControlBarFilterButtons>
        <Styled.Button isActive={filter === 'all'} onClick={() => changeFilterHandler("all")}>All</Styled.Button>
        <Styled.Button isActive={filter === 'active'}
                       onClick={() => changeFilterHandler("active")}>Active</Styled.Button>
        <Styled.Button isActive={filter === 'completed'}
                       onClick={() => changeFilterHandler("completed")}>Completed</Styled.Button>
      </Styled.ControlBarFilterButtons>
      <Styled.Button onClick={clearCompletedTasksHandler}>Clear completed</Styled.Button>
    </Styled.ControlBarWrapper>
  );
};