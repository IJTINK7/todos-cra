import * as Styled from "./Todolist.styles"
import {NestedList} from "./NestedList";

export const Todolist = () => {
  return (
    <Styled.TodolistWrapper>
      <Styled.Heading>todos</Styled.Heading>
      <NestedList/>
    </Styled.TodolistWrapper>
  );
};