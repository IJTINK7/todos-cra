import {styled} from "@mui/material/styles";
export const TodolistInput = styled("input")({
  border: "none",
  outline: "none",
  width: "580px",
  height: "55px",
  padding: "15px 60px 15px 15px",
  fontSize: "30px",
  "&::placeholder": {
    opacity: 0.2,
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 300,
    fontStyle: "italic",
    fontSize: "30px",
  },
});
