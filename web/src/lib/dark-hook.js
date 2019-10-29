import { useState, useEffect } from 'react'
import {isBrowser} from './helpers'

export default function useDark(){
  const key = 'dark__mode'
  const prefersDark = isBrowser() && 
    matchMedia('(prefers-color-scheme: dark)').matches ? true : false
  
  const stateOfDark = isBrowser() &&
    localStorage.getItem(key) !== null && 
      localStorage.getItem(key) !== 'null'
        ? JSON.parse(localStorage.getItem(key)) 
        : prefersDark

  const [state, setState] = useState(stateOfDark)
  
  const setDarkState = () => {
      console.log("O estado de 'isDark' foi alterado de ", state, " para ", !state)
    setState(state => !state)
  }

  useEffect(()=> {
    window.addEventListener('storage', setDarkState)
    localStorage.setItem(key, state)    
    return () => { 
      window.removeEventListener('storage', setDarkState) 
    }
  },[state])
  
  return [state, setDarkState]
}