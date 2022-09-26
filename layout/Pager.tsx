import { Box } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

interface IProps {
  children: React.ReactNode
}

const Pager = ({ children }: IProps) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default Pager
