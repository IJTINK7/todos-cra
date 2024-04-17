import {ChangeEvent, KeyboardEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {addTaskActionCreator, changeTaskTitleActionCreator} from "../store/todolist-reducer";


export const TodolistInput = () => {
	const taskTitleInputValue = useSelector<AppRootStateType, string>(state => state.todolist.taskTitleInputValue)
	const dispatch = useDispatch()

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(changeTaskTitleActionCreator(e.currentTarget.value))
	}

	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			dispatch(changeTaskTitleActionCreator(""))
			dispatch(addTaskActionCreator(e.currentTarget.value))
		}
	}

	return (
			<input value={taskTitleInputValue} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} placeholder={"What needs to be done?"}/>
	);
};
