import { useCallback, useRef, useState } from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import { Alert, Box, InputAdornment, styled, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

import { createColor } from '../services'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useQuery, useMutation } from '@tanstack/react-query'
import { removeColorPrefix } from '../utils'

type Color = string

const StyledColorPicker = styled(HexColorPicker)({
  width: '400px !important',
  height: '400px !important',
})

const StyledTextField = styled(TextField)({
  width: '400px !important',
  height: '40px !important',
  marginTop: '30px',
})

const StyledButton = styled(LoadingButton)({
  width: '400px !important',
  height: '40px !important',
  marginTop: '30px',
})

type FormColor = {
  value: string
  story: string
}

const colorReg = /^([0-9a-f]{3}|[0-9a-f]{6})$/i

// Create Color
const Create = () => {
  const [color, setColor] = useState<string>()
  const colorMutation = useMutation((c: COLOR_SPACE.NewColor) => createColor(c))
  const form = useForm<FormColor>()

  const {
    // register,
    handleSubmit,
    // watch,
    control,
    // formState: { errors },
  } = form

  const onSubmit: SubmitHandler<FormColor> = (data) => {
    console.log('data: ', data)
    colorMutation.mutate(data)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledColorPicker
        color={color}
        onChange={(color) => {
          form.setValue('value', removeColorPrefix(color))
        }}
      />

      <Box component='form' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            control={control}
            name='value'
            rules={{
              required: 'please show your color',
              pattern: colorReg,
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <StyledTextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>#</InputAdornment>
                  ),
                }}
                helperText={
                  <>
                    {error?.type === 'required' && error.message}
                    {error?.type === 'pattern' && 'invalid color'}
                  </>
                }
                size='small'
                error={!!error}
                onChange={(e) => {
                  console.log('e11', e.target.value)
                  onChange(e.target.value)
                  setColor(e.target.value)
                }}
                value={value}
                fullWidth
                label='Color'
                variant='outlined'
              />
            )}
          ></Controller>
        </div>
        <div>
          <Controller
            control={control}
            name='story'
            rules={{
              maxLength: 20,
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <StyledTextField
                size='small'
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label='Story'
                placeholder='a story、allusion'
                variant='outlined'
                helperText={
                  <>{error?.type === 'maxLength' && 'length limit 20 '}</>
                }
              />
            )}
          ></Controller>
        </div>

        <div>
          <StyledButton
            type='submit'
            variant='outlined'
            color='primary'
            loading={colorMutation.isLoading}
          >
            创建
          </StyledButton>
          {colorMutation.isSuccess && (
            <Alert variant='outlined' severity='success'>
              创建成功
            </Alert>
          )}
        </div>
      </Box>
    </Box>
  )
}

export default Create
