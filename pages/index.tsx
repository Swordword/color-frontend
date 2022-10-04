import { useEffect } from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
// import request from '../utils/request'
import Button from '@mui/material/Button'
import { ThemeProvider, useTheme } from '@mui/material/styles'
import { outerTheme, innerTheme } from '../config/theme'
import Checkbox from '@mui/material/Checkbox'
// import Link from '../components/Link'

const Home: NextPage = () => {
  const theme = useTheme()

  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button>primart button</Button>
        <Button variant='contained'>contained button</Button>
        <Button variant='outlined'>outlined button</Button>
      </Box>
      <Box>
        <ThemeProvider theme={outerTheme}>
          <Checkbox defaultChecked />
          <ThemeProvider theme={innerTheme}>
            <Checkbox defaultChecked />
          </ThemeProvider>
        </ThemeProvider>
      </Box>
    </Container>
  )
}

export default Home
