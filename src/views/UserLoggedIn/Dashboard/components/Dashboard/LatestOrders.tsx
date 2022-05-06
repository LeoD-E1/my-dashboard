import { useId, useEffect, useState, useRef } from "react";
// import { format } from 'date-fns';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

declare type Order = {
  id: number;
  ref: string;
  amount: number;
  customer: {
    name: string;
  };
  createdAt: string;
  status: string;
};

const LatestOrders = (props: any) => {
  // const generatedId = useId();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const errorRef = useRef<string>("");

  const getOrdersfromDataBase = async () => {
    setLoading(true);
    try {
      const response = await fetch("orders.json");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.log(typeof error, error);
      // errorRef.current = error.toString()
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getOrdersfromDataBase();
  }, []);

  return (
    <Card {...props}>
      <CardHeader title="Latest Orders" />
      {/* <PerfectScrollbar> */}
      <Box sx={{ minWidth: 800 }}>
          {isLoading && !isError ? (
            <p>Loading...</p>
          ) : (
        <Table>
          <TableHead>
            <TableRow sx={{ overflowX: "scroll" }}>
              <TableCell>Order Ref</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order: Order) => (
                <TableRow hover key={order.id}>
                  <TableCell>{order.ref}</TableCell>
                  <TableCell>{order.customer.name}</TableCell>
                  <TableCell>
                    {/* {format(order.createdAt, 'dd/MM/yyyy')} */}
                    {order.createdAt}
                  </TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
          )}
      </Box>
      {/* </PerfectScrollbar> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default LatestOrders;
