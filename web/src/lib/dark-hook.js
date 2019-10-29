import { useState, useEffect } from 'react'
import {isBrowser} from './helpers'

function useDark(){
  const key = 'dark__mode'
  const [state, setState] = useState(() => { 
    let value;
    try { 
      value = localStorage.getItem(key) !== null 
        && localStorage.getItem(key);
    } catch(e) { value = matchMedia('(prefers-color-scheme: dark)').matches; }   
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