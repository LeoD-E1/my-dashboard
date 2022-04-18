import { Link } from "wouter";

import Box from "@mui/material/Box";
import ProfileMenu from "components/ProfileMenu";
import Typography from "@mui/material/Typography";

const NavBar = () => {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          borderBottom: "1px solid #EBEBED",
          backgroundColor: 'orangered',
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <Typography sx={{ minWidth: 100, cursor: "pointer" }}>
            Home
          </Typography>
        </Link>
        <Link to="/login">
          <Typography sx={{ minWidth: 100, cursor: "pointer" }}>
            Login
          </Typography>
        </Link>
        <ProfileMenu />
      </Box>
     
    </>
  );
};

export default NavBar;
