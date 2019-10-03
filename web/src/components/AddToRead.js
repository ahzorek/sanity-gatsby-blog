import React, {useState, useEffect} from 'react'

const AddToRead = ({node}) => {
  const [buttonIsAdding, setButton] = useState(true)  

  useEffect(() => {
    if(typeof window !== undefined){
      if(localStorage.getItem(node.id) !== null) {
        setButton(false)
      } else setButton(true)      
    }

  })
  const handleReadList = e => {
    if(typeof window !== undefined){
      if(localStorage.getItem(node.id) === null){
        localStorage.setItem(node.id, JSON.stringify(node))
        setButton(false)
      } else {
          console.log('Item ja existe e será removido: ', node.title)     
          localStorage.removeItem(node.id)
          setButton(true)
        }
    }
  }
  return (
    <button onClick={handleReadList} >
      {buttonIsAdding ? 'Adicionar a ' : 'Remover da '}  Lista
    </button>
  )
}
export default AddToRead