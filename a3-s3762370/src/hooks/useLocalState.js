import { useState, UseEffect, useEffect } from "react"

const useLocalState = (defaultValue, key) => {

  const storedData = localStorage.getItem(key)
  const [state, setState] = useState(
    storedData ? JSON.parse(storedData) : defaultValue
  )
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, setState]
}

export default useLocalState