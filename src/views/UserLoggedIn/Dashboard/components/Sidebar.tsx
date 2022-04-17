import React from "react";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { Box, useMediaQuery, Drawer } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import MenuItem from "./MenuItem";

const Sidebar = (props: any) => {
  const { open, onClose } = props;
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg') , {
    defaultMatches: true,
    noSsr: false
  });

  const items = [
    {
      href: "/dashboard",
      icon: <OpenInNewIcon fontSize="small" />,
      title: "Dashboard",
    },
    {
      href: "/dashboard/",
      icon: <StarBorder fontSize="small" />,
      title: "Customers",
    },
    {
      href: "/products",
      icon: <ExpandLess fontSize="small" />,
      title: "Products",
    },
    {
      href: "/account",
      icon: <SendIcon fontSize="small" />,
      title: "Account",
    },
    {
      href: "/dashboard/settings",
      icon: <DraftsIcon fontSize="small" />,
      title: "Settings",
    },
    {
      href: "/login",
      icon: <InboxIcon fontSize="small" />,
      title: "Login",
    },
    {
      href: "/register",
      icon: <ExpandMore fontSize="small" />,
      title: "Register",
    },
    {
      href: "/404",
      icon: <ExpandMore fontSize="small" />,
      title: "Error",
    },
  ];

  const Content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#111827",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        {items.map((item) => (
          <MenuItem
            key={item.title}
            icon={item.icon}
            href={item.href}
            title={item.title}
          />
        ))}
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {Content }
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {Content }
    </Drawer>
  );
};

export default Sidebar;
