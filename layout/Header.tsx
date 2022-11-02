import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
          <Link
            href={{
              pathname: '/',
            }}
          >
            <Image src={palette} width={40} height={40} alt=''></Image>
          </Link>
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
          <Link href={{ pathname: '/create' }}>
            <Button variant='contained'>创建属于你的颜色❕</Button>
          </Link>
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
