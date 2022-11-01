import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Slider, { SliderProps } from '@mui/material/Slider'
import { alpha, styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import request from '../utils/request'

async function getColors(): Promise<Record<string, any>> {
  const res = await request({
    url: 'color',
  })
  return res
}

const SuccessSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  width: 300,
  color: theme.status.danger,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}))

const Foo = () => {
  const [count, setCount] = useState<number>()

  useEffect(() => {
    setCount(Math.random())
  }, [])

  const getColorsQuery = useQuery('getColors', getColors)
  return (
    <>
      <span>{count}</span>
      {getColorsQuery.isLoading && <div>loading...</div>}
      {getColorsQuery.error && <div>error:</div>}
      {getColorsQuery.data && <>{getColorsQuery.data.length}</>}
      <Box
        sx={{
          width: '300px',
          margin: 'auto',
        }}
      >
        <SuccessSlider></SuccessSlider>
      </Box>
    </>
  )
}

export default Foo
