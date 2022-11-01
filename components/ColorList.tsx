import React, { useState } from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import heart from '../assets/image/heart.png'

dayjs.extend(relativeTime)

const ColorBox = styled(Box)({
  display: 'none',
  position: 'absolute',
  left: 4,
  bottom: 4,
  backgroundColor: 'rgba(0,0,0,.2)',
  color: '#fff',
  cursor: 'pointer',
  padding: '4px',
})

const ColorItem = styled(Box, {
  overridesResolver: (props, styles) => [
    {
      backgroundColor: props.bgColor || 'transparent',
    },
  ],
})(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  // 设置宽高比：4:3
  height: 0,
  paddingBottom: '75%',
  borderRadius: '10px',
  position: 'relative',
  '&:hover .css-1bgfpna': {
    display: 'block',
  },
}))

const ColorInfo = styled(Box)({
  height: '48px',
  marginTop: '14px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
const ColorStar = styled(Box)({
  height: '48px',
  width: '100px',
  border: '1px solid #ECECEC',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  cursor: 'pointer'
})

const ColorDate = styled(Box)({})

interface IProps {
  colors: COLOR_SPACE.Color[]
}

const ColorList = ({ colors }: IProps) => {
  return (
    <Grid container spacing={3} maxWidth='lg'>
      {colors.map((color, index) => (
        <Grid xs={6} md={4} lg={3} key={index}>
          <ColorItem bgcolor={color.value}>
            <ColorBox>{color.value}</ColorBox>
          </ColorItem>
          <ColorInfo>
            <ColorStar>
              <Image src={heart} alt='heart' width={24} height={24}></Image>
              <span>{color.stars}</span>
            </ColorStar>
            <ColorDate>{dayjs().from(color.CreatedAt, true)}</ColorDate>
          </ColorInfo>
        </Grid>
      ))}
    </Grid>
  )
}

export default ColorList
