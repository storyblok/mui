import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { Box, Typography } from "@mui/material";

// TODO add more props from Typography: sx, variant, component
export const Title: FunctionComponent<
  PropsWithChildren<{
    icon?: ReactNode;
  }>
> = (props) => (
  <Box display="flex" gap={2} alignItems="center">
    {props.icon && (
      <Typography
        variant="h1"
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {props.icon}
      </Typography>
    )}
    <Typography variant="h1">{props.children}</Typography>
  </Box>
);
