import { useState, useEffect } from 'react'
import {isBrowser} from './helpers'

function useDark(){
  const key = 'dark__mode'
  const [state, setState] = useState(() => { 
    let value;
    try { 
      value = JSON.parse(localStorage.getItem(key)) !== null 
        ? JSON.parse(localStorage.getItem(key)) 
        : matchMedia('(prefers-color-scheme: dark)').matches
    } catch(e) { value = false }   
    return value
  })
  
  const handleLocalDark = () => setState(prev => !prev)

  useEffect(()=> {
    window.addEventListener('storage', handleLocalDark)
    localStorage.setItem(key, state)
    return () => { 
      window.removeEventListener('storage', handleLocalDark) 
    }
  },[state])
  
  return [state, setState]
}
export default useDark