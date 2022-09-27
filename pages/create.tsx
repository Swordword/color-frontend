import { useState } from 'react'
import InputColor, { Color } from 'react-input-color'

const Create = () => {
  const [color, setColor] = useState('#5e72e4')
  const handleChangeColor = (value: Color) => {
    console.log('fn handleChangeColor')
    setColor(value.rgba)
  }
  return (
    <div>
      <InputColor
        initialValue={color}
        onChange={handleChangeColor}
        placement='left'
      ></InputColor>
    </div>
  )
}

export default Create
