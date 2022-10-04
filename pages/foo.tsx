import { useEffect, useState } from 'react'

import { useQuery } from 'react-query'
import request from '../utils/request'

async function getColors() {
  const res = await request({
    url: 'color',
  })
  console.log('res', res)
  return res
}

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
    </>
  )
}

export default Foo
