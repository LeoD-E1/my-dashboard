import React, {useState} from "react";
import Menu from "./components/Menu";
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { DashboardNavbar } from './dashboard-navbar';

const Dashboard = (props: any) => {

  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 280
    }
  }));

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
            bgColor: '#333'
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      {/* <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} /> */}
      <Menu
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};

export default Dashboard;
