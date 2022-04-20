
import { Box, Container, Grid } from '@mui/material';
import DashboardLayout from './components/DashboardLayout';
// import { DashboardNavbar } from './dashboard-navbar';
import TotalCustomers from './components/TotalCustomers'

const Dashboard = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            {/* <Budget />  */}
            <h1>Budget</h1>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            {/* <TasksProgress /> */}
            <h1>TasksProgress</h1>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            {/* <TotalProfit sx={{ height: '100%' }} /> */}
            <h1>TotalProfit</h1>
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <Sales /> */}
            <h1>Sales</h1>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
            <h1>TrafficByDevice</h1>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <LatestProducts sx={{ height: '100%' }} /> */}
            <h1>LatestProducts</h1>
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <LatestOrders /> */}
            <h1>LatestOrders</h1>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
) 

const DashboardView = () => (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );

export default DashboardView;