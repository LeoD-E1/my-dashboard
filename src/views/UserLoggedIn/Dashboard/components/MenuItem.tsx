import React from "react";
import { Box, Button, ListItem } from "@mui/material";
import { Link } from "wouter";

const MenuItem = (props: any) => {
  const { href, icon, title, ...others } = props;
  const active = href === window.location.pathname;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
        <Button
          component="a"
          href={href}
          startIcon={icon}
          disableRipple
          /* @ts-ignore */
          sx={{
            backgroundColor: active && "rgba(255,255,255, 0.08)",
            borderRadius: 1,
            color: active ? "secondary.main" : "neutral.300",
            fontWeight: active && "fontWeightBold",
            justifyContent: "flex-start",
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: active ? "secondary.main" : "neutral.400",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
    </ListItem>
  );
};

export default MenuItem;
