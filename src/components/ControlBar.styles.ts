import {styled} from "@mui/material/styles";

export const ControlBarWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: "30px",
  alignContent: "center",
  alignItems: "center",
  padding: "0 15px",
  fontFamily: '"Roboto", sans-serif',
  opacity: 0.8,
  fontWeight: 200,
  "& > div, & > div > button, & > button": {
    fontSize: "18px",
  },
});
export const ControlBarItemsCount = styled("div")({
  userSelect: "none"
});
export const ControlBarFilterButtons = styled("div")({
  display: "flex",
  gap: "20px",
});

export const Button = styled("button")<{ isActive?: boolean }>(({ isActive }) => ({
  border: "none",
  width: "auto",
  height: "32px",
  background: "transparent",
  borderRadius: "4px",
  fontFamily: '"Roboto", sans-serif',
  fontWeight: 300,
  opacity: 0.8,
  ...(isActive && {
    border: "1px solid #E9DAD9",
  }),
  "&:hover": {
    background: "#EAEAEA",
  },
}));