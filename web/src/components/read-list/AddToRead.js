import React, {useState, useEffect} from 'react'
import IosBookmark from 'react-ionicons/lib/IosBookmark'
import { useSnackbar } from 'notistack'

const AddToRead = ({node, style}) => {
  const [buttonIsAdding, setButton] = useState(true) 
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if(localStorage.getItem(node.id) !== null) {
      setButton(false)
    } else setButton(true)      
  })

  const handleReadList = e => {
    if (typeof window !== 'undefined'){
      if(localStorage.getItem(node.id) === null){
        localStorage.setItem(node.id, JSON.stringify(node))
        setButton(false)
        enqueueSnackbar('Foi adicionado a sua lista.');
      } else {
          localStorage.removeItem(node.id)
          setButton(true)
          enqueueSnackbar('Foi removido da sua lista.');

        }
    }
  }
  return (
    <div style={{...style}}>
      <IosBookmark  
        fontSize="14pt"
        color={buttonIsAdding ? 'black' : 'rgb(224, 22, 22)' }
        style={{
          transform: buttonIsAdding ? 'none' : 'scaleY(1.2)',
          transition: 'transform 100ms ease',
          transformOrigin: 'center top'
        }}
        onClick={handleReadList}
        title={ `${buttonIsAdding ? 'Adicionar a ' : 'Remover da '} Lista de Leitura`}
        />
      </div>
  )
}
export default AddToRead
 