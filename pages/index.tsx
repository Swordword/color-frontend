import { useState } from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
// import { useTheme } from '@mui/material/styles'

import { useQuery } from '@tanstack/react-query'
import ColorList from '../components/ColorList'
import { colorList } from '../services'
import { useIdentityContext } from '../config/identifyContext'

const defaultPager = {
  page: 1,
  pageSize: 20,
}

const Home: NextPage = () => {
  const [pager, setPager] = useState<COLOR_SPACE.Pager>(defaultPager)
  const identifierId = useIdentityContext()
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
  if (error) return <div> error </div>
  return (
    <>
      <Container>
        <ColorList colors={list!} />
      </Container>
    </>
  )
}

export default Home
