'use client'

import { useEffect } from 'react'

const BootstrapProvider = ({ children }) => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return children
}

export { BootstrapProvider }
