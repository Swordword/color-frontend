import * as React from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import { Box, Button, Container } from '@mui/material'
import palette from '../assets/image/palette.png'

/** 表头 */
const Header = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{
        maxWidth: 1700,
        height: '60px',
        lineHeight: '60px',
        padding: '8px 0',
      }}
    >
      <Grid container spacing={0}>
        <Grid
          xs={8}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Image src={palette} width={40} height={40} alt=''></Image>
          <Typography
            sx={{
              ml: 1,
            }}
            variant='h6'
          >
            Colorist
          </Typography>
        </Grid>

        <Grid xs={4}>
          <Button variant='contained'>Create Color Belonging to You❕</Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          height: '1px',
          opacity: 0.1,
          background:
            'linear-gradient(90deg,rgba(0,0,0,0.00) 0%,#000000 50%,rgba(0,0,0,0.00) 100%)',
        }}
      ></Box>
    </Container>
  )
}

export default Header
