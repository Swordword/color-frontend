import Fingerprintjs from '@fingerprintjs/fingerprintjs'
import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext('')

interface IProps {
  children: JSX.Element
}

// 浏览器唯一标识
export function IdentityContext({ children }: IProps) {
  const [visitorId, setVisitorId] = useState<string>('')
  const loadFingerprint = async () => {
    const fpPromise = Fingerprintjs.load({
      monitoring: false,
    })
    const fp = await fpPromise
    const result = await fp.get()
    console.log('fp result', result)
    setVisitorId(result.visitorId)
  }
  useEffect(() => {
    console.log('IdentityContext IdentityContext')
    if (!visitorId) {
      loadFingerprint()
    }
  }, [])
  return <Context.Provider value={visitorId}>{children}</Context.Provider>
}

export function useIdentityContext() {
  return useContext(Context)
}
