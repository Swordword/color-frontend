import { createTheme } from '@mui/material/styles'
import type {} from '@mui/lab/themeAugmentation';


import { green, orange, red } from '@mui/material/colors'

// 拓展模块只能在模块中声明，如果在全局d.ts中声明会被识别为对这个模块的整体声明，直接覆盖原本的声明
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

const theme = createTheme({
  transitions: {
    // 全局禁用涟漪效果。So we have `transition: none;` everywhere
    // create: () => 'none',
  },
  status: {
    danger: orange[500],
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0095B6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  }

})

const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
})

const innerTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
})

export { theme, outerTheme, innerTheme }
