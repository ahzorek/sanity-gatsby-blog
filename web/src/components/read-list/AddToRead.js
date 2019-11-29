import React, {useEffect} from 'react'
import IosBookmark from 'react-ionicons/lib/IosBookmark'
import useAddHook from './AddHook'

const AddToRead = ({node, style}) => {
  const [status, changes, setStatus, handleChange] = useAddHook()
  const {isListed} = status
  useEffect(() => {
    setStatus({
      id: node.id, 
      isListed: localStorage.getItem(node.id) !== null ? true : false
    })
  },[changes])

  return (
    <span style={{...style}}>
      <IosBookmark
        fontSize="14pt"
        color={isListed ? 'rgb(224, 22, 22)' : 'black' }
        style={{
          transform: isListed ? 'scaleY(1.4)' : 'scaleY(1)',
          transition: 'transform 100ms ease',
          transformOrigin: 'center top'
        }}
        onClick={e => handleChange(node)}
        title={ `${isListed ? 'Remover da ' : 'Adicionar a '} Lista de Leitura`}
        />
      </span>
  )
}
export default AddToRead
 