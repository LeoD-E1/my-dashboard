import React from 'react'
import DashboardLayout from "components/Dashboard/DashboardLayout";
import { Box, Container } from "@mui/material";


const Customers = () => {
  return (
    <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container maxWidth={false}>
        
      </Container>
    </Box>
  </>
  )
}

const CustomersView = () => (
  <DashboardLayout>
    <Customers />
  </DashboardLayout>
)

export default CustomersView