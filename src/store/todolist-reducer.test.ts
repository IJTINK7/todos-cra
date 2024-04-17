import {
	addTaskActionCreator, changeFilterActionCreator,
	changeTaskStatusActionCreator, clearCompletedTasksActionCreator,
	FilterType,
	todolistReducer,
	TodolistType
} from "./todolist-reducer";

let initialState: TodolistType = {filter: "all", tasksData: [], activeItemsCount: 0, taskTitleInputValue: ""};

beforeEach(() => {
	initialState = {
		taskTitleInputValue: "",
		tasksData: [
			{id: "1", title: "Тестовое задание", isDone: false},
			{id: "2", title: "Прекрасный код", isDone: true},
			{id: "3", title: "Покрытие тестами", isDone: false}],
		activeItemsCount: 2,
		filter: "all"
	}
});

test('correct todolist should be added', () => {

	let newTodolistTitle = "New Todolist";

	const endState = todolistReducer(initialState, addTaskActionCreator(newTodolistTitle))

	expect(endState.tasksData.length).toBe(4);
	expect(endState.tasksData[3].title).toBe(newTodolistTitle);
	expect(endState.tasksData[3].isDone).toBe(false);
});

test('correct task should change its status', () => {

	const endState = todolistReducer(initialState, changeTaskStatusActionCreator("2", false));
	const endState2 = todolistReducer(initialState, changeTaskStatusActionCreator("1", true));

	expect(endState.tasksData[1].isDone).toBe(true);
	expect(endState2.tasksData[0].isDone).toBe(false);
	expect(endState2.tasksData.length).toBe(3);

});

test('correct filter of todolist should be changed', () => {
	let newFilter: FilterType = "completed";
	const endState = todolistReducer(initialState, changeFilterActionCreator(newFilter));
	expect(endState.filter).toBe("completed");

	let newFilter2: FilterType = "all";
	const endState2 = todolistReducer(initialState, changeFilterActionCreator(newFilter2));
	expect(endState2.filter).toBe("all");
});

test('correct count of tasks should be left', () => {
	const endState = todolistReducer(initialState, clearCompletedTasksActionCreator());
	expect(endState.tasksData.length).toBe(2);

	let newInitialState: TodolistType = {
		taskTitleInputValue: "",
		tasksData: [
			{id: "1", title: "Тестовое задание", isDone: false},
			{id: "2", title: "Прекрасный код", isDone: true},
			{id: "3", title: "Покрытие тестами", isDone: false},
			{id: "4", title: "Покрытие тестами", isDone: true},
			{id: "5", title: "Покрытие тестами", isDone: false},
			{id: "6", title: "Покрытие тестами", isDone: true},
			{id: "7", title: "Покрытие тестами", isDone: false}
		],
		activeItemsCount: 2,
		filter: "all"
	}
	const newEndState = todolistReducer(newInitialState, clearCompletedTasksActionCreator());
	expect(newEndState.tasksData.length).toBe(4);
});

