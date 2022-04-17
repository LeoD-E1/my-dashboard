import React from "react";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { Box } from "@mui/material";
import MenuItem from "./MenuItem";

const Menu = (props: any) => {
  const { open, onClose } = props;
  

  const items = [
    {
      href: "/",
      icon: <OpenInNewIcon fontSize="small" />,
      title: "Dashboard",
    },
    {
      href: "/customers",
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
      href: "/settings",
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: '#111827'
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        {items.map((item) => (
          <>
            <MenuItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Menu;
