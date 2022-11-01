import React, { useEffect } from 'react'
import { useIdentityContext } from '../config/identifyContext'

const Uid = () => {
  const identityId = useIdentityContext()

  return <div>Uid：{identityId}</div>
}

export default Uid
