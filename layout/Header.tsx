import * as React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'

/** 表头 */
const Header = () => {
  return (
    <Container
      sx={{
        maxWidth: 1700,
      }}
    >
      <Grid container spacing={0}>
        <Grid xs={4} sx={{ textAlign: 'center' }}>
          <Typography variant='subtitle1' component='h1'>
            colorist
          </Typography>
          <Typography variant='subtitle2'>gather impressive color</Typography>
        </Grid>
        <Grid xs={8}></Grid>
      </Grid>
    </Container>
  )
}

export default Header
