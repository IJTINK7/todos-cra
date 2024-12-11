import {styled} from "@mui/material/styles";

type ListItemType = {
  isDone: boolean
}
export const List = styled("ul")({
  listStyleType: "none",
  padding: 0,
  margin: 0,
});

// Стили для li
export const ListItem = styled("li")<ListItemType>(({isDone}) => ({
  padding: 0,
  margin: 0,
  opacity: isDone ? 0.5 : 1,
  textDecoration: isDone ? "line-through" : "none",
}));

export const TaskTitle = styled("span")({
  wordWrap: "break-word",
  paddingLeft: "10px",
});

export const Hr = styled("hr")({
  width: "100%",
  opacity: 0.5,
  "&:first-of-type": {
    boxShadow: "0 -1px 8px rgba(0, 0, 0, 0.5)",
    margin: "0 0 16px 0",
    padding: 0,
  },
});