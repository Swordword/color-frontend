import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

export default function Copyright() {
  const [origin, setOrigin] = useState<string>()
  useEffect(() => {
    setOrigin(location.origin)
  }, [])
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <MuiLink target='_blank' color='inherit' href={origin}>
        {origin}
      </MuiLink>
      {' ' + new Date().getFullYear()}
    </Typography>
  )
}
