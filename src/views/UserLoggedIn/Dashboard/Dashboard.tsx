import { Box, Container, Grid } from "@mui/material";
import DashboardLayout from "components/Dashboard/DashboardLayout";
// import { DashboardNavbar } from './dashboard-navbar';
import TotalCustomersCard from "./components/Dashboard/TotalCustomersCard";
import BudgetCard from "./components/Dashboard/BudgetCard";
import TasksProgressCard from "./components/Dashboard/TasksProgressCard";
import TotalProfitCard from "./components/Dashboard/TotalProfitCard";
import LatestOrders from "./components/Dashboard/LatestOrders";

const Dashboard = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <BudgetCard />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalCustomersCard />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TasksProgressCard />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalProfitCard />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            {/* <Sales /> */}
            <h1>Sales</h1>
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
            <h1>TrafficByDevice</h1>
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            {/* <LatestProducts sx={{ height: '100%' }} /> */}
            <h1>LatestProducts</h1>
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

const DashboardView = () => (
  <DashboardLayout>
    <Dashboard />
  </DashboardLayout>
);

export default DashboardView;
