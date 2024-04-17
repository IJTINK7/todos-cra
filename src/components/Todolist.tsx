import styles from "./Todolist.module.css"
import {NestedList} from "./NestedList";

export const Todolist = () => {

	return (
		<div className={styles.todolist}>
			<h1>todos</h1>
			<NestedList/>
		</div>
	);
};