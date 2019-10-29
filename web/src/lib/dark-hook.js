import { useState, useEffect } from 'react'
import {isBrowser} from './helpers'

export default function useDark(){
  const key = 'dark__mode'

  const prefersDark = isBrowser() && matchMedia('(prefers-color-scheme: dark)').matches ? true : false;

  console.log("preferencia do ususario", prefersDark, typeof(prefersDark))

  const stateOfDark = isBrowser() &&
    localStorage.getItem(key) !== 'undefined' && localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key)) 
    : prefersDark;

  const [state, setState] = useState(stateOfDark)
  
  const handleLocalDark = () => setState(state => !state)

  useEffect(()=> {
    window.addEventListener('storage', handleLocalDark)
    localStorage.setItem(key, state)    
    return () => { 
      window.removeEventListener('storage', handleLocalDark) 
    }
  },[state])
  
  return [state, setState]
}

//isBrowser() ? matchMedia('(prefers-color-scheme: dark)').matches : 