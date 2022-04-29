import React from 'react'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import {ArrowUpward, ArrowDownward, Circle} from '@mui/icons-material';
import  * as MuiIcons from "@mui/icons-material"

type CardProps = {
  icon?: keyof typeof MuiIcons,
  title: string,
  quantity: { number: number, unit: string },
  situation?: { move: 'up' | 'down'| "", percentage: string, description: string },
}

const CardTemplate = (props: CardProps) => {
  const { icon, title, quantity, situation} = props;
  return (
    <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
           {title}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {quantity.number} {quantity.unit}
          </Typography>
        </Grid>
        <Grid item>

          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            {icon ? (
              <Box
                component={MuiIcons[icon]}
                color="inherit"
              />

            ) : <Circle />}
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        {
          situation?.move === 'up' 
          ? <ArrowUpward color="success" /> 
          : situation?.move === 'down' ? <ArrowDownward color="error" /> : null
        }
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          {situation?.percentage}
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          {situation?.description}
        </Typography>
      </Box>
    </CardContent>
  </Card>
  )
}

export default CardTemplate