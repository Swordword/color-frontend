import { useState } from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
// import { useTheme } from '@mui/material/styles'

import { useQuery } from '@tanstack/react-query'
import ColorList from '../components/ColorList'
import { colorList } from '../services'

const defaultPager = {
  page: 1,
  pageSize: 20,
}

const Home: NextPage = () => {
  const [pager, setPager] = useState<COLOR_SPACE.Pager>(defaultPager)
  const {
    data: list,
    isLoading,
    error,
  } = useQuery<COLOR_SPACE.Color[]>(
    ['colorList', pager],
    () => colorList(pager),
    {
      keepPreviousData: true,
    }
  )
  if (isLoading) return <div>loading...</div>
  if (error) return <div> error:{error}</div>
  return (
    <>
      <Container
        sx={{
          padding: '20px',
        }}
      >
        <ColorList colors={list!} />
      </Container>
    </>
  )
}

export default Home
