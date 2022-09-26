import { useEffect } from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import request from '../utils/request'
// import Link from '../components/Link'

const Home: NextPage = () => {
  const loadData = async () => {
    const res = await request({
      url: 'color',
    })
    console.log('111', res)
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >111</Box>
    </Container>
  )
}

export default Home
