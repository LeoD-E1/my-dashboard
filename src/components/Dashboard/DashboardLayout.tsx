import React, {useState} from "react";
import DashboardSidebar from "./DashboardLayout/DashboardSidebar";
import { Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import DashboardNavbar from './DashboardLayout/DashboardNavbar';

const DashboardLayout = (props: any) => {

  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 280
    },
    paddingTop: "4rem"
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
            py: 8,
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};

export default DashboardLayout;
