import { createTheme } from '@mui/material/styles'

import { red } from '@mui/material/colors'

const theme = createTheme({
  transitions: {
    // 全局禁用涟漪效果。So we have `transition: none;` everywhere
    // create: () => 'none',
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
