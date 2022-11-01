import { Box, styled } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

interface IProps {
  children: React.ReactNode
}

const Container = styled(Box)({
  maxWidth: '1200px',
  margin: 'auto',
})

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
      <Container>{children}</Container>

      <Footer />
    </Box>
  )
}

export default Pager
