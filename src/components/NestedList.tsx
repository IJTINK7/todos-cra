import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import {useState} from "react";
import {ExpandMore} from "@mui/icons-material";
import {TodolistInput} from "./TodolistInput";
import {TasksBar} from "./TasksBar";
import {ControlBar} from "./ControlBar";
import * as Styled from "./NestedList.styles";

export const NestedList = () => {
  const [open, setOpen] = useState<boolean>(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Styled.NestedListWrapper>
      <List
        component="div"
        style={{margin: 0, padding: 0}}
      >
        <Styled.NestedListDropdown>
          <ListItemButton onClick={handleClick} style={{backgroundColor: '#FFF'}}>
            {open ? <ExpandLess/> : <ExpandMore/>}
          </ListItemButton>
          <TodolistInput/>
        </Styled.NestedListDropdown>
        <Collapse in={open} unmountOnExit>
          <List style={{backgroundColor: '#FFF'}}>
            <Styled.Hr/>
            <TasksBar/>
            <ControlBar/>
          </List>
        </Collapse>
      </List>
    </Styled.NestedListWrapper>
  );
}
