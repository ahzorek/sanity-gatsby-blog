import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'

const useAddHook = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [changes, setChanges] = useState(0)
  const [status, setStatus] = useState({
    id: null,
    isListed: false
  })

  const setId = (node) => {
    setStatus({
      id: node.id,
      isListed: localStorage.getItem(node.id) !== null ? true : false
    })
  }

  const handleChange = (node) => {
    setChanges(prev => prev + 1)
    if (localStorage.getItem(node.id) === null) {
      localStorage.setItem(node.id, JSON.stringify(node))
      setId(node)
      enqueueSnackbar('Foi adicionado a sua lista.');
    } else {
      localStorage.removeItem(node.id)
      setId(node)
      enqueueSnackbar('Foi removido da sua lista.');
    }
  }

  const handleLocalStorageChange = (e) => {
    setChanges(prev => prev + 1)
    if(e.newValue === null && e.key === status.id){
      console.log('is removing, evaluates to', (e.key === status.id))
      setStatus({ ...status, isListed: false})
    } else if(e.key === status.id) {
      console.log('is adding, evaluates to', (e.key === status.id))
      setStatus({ ...status, isListed: true})
    }
  }

  useEffect(() => {
    window.addEventListener('storage', handleLocalStorageChange)
    return () => {
      window.removeEventListener('storage', handleLocalStorageChange)
    }
  },[])

  return [status, changes, setStatus, handleChange]
}
export default useAddHook
