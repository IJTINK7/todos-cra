import {styled} from "@mui/material/styles";

export const NestedListWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});
export const NestedListDropdown = styled("div")({
  display: "flex",
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
