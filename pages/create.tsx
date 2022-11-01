import { useCallback, useState } from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import { Box, Button, styled, TextField } from '@mui/material'
import { createColor } from '../services'

type Color = string

const StyledColorPicker = styled(HexColorPicker)({
  width: '400px !important',
  height: '400px !important',
})

const StyledColorInput = styled(HexColorInput)(({ theme }) => ({
  ...theme.typography.body2,
  width: '400px !important',
  height: '40px !important',
  marginTop: '20px',
  outline: 'none',
  borderColor: theme.palette.primary.main,
}))
// Create Color
const Create = () => {
  const [color, setColor] = useState<Color>()
  const handleCreate = useCallback(()=>{
    createColor(color!)
  },[color])
  return (
    <div>
      <StyledColorPicker color={color} onChange={setColor} />
      <StyledColorInput color={color} onChange={setColor} prefixed />
      <TextField></TextField>
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '20px',
          width: '400px',
        }}
      >
        <Button variant='contained' onClick={handleCreate} sx={{
          width: '100%'
        }} disabled={true}>
          Create
        </Button>
      </Box>
    </div>
  )
}

export default Create
