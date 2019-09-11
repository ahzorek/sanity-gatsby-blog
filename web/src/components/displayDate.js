import React from 'react'
import {format, formatDistanceToNow, differenceInDays, parseISO} from 'date-fns'
import { ptBR } from 'date-fns/locale'

const DisplayDate = ({postdate, update, isUpdate}) => {
  const defaultDate = format(parseISO(postdate), "d 'de' MMMM 'de' yyyy", { locale: ptBR })
  const relativeDate = formatDistanceToNow(parseISO(postdate), { addSuffix: true, locale: ptBR })

  const UpdateBlock = () => {
    return <h6>atualizado em {isUpdate && format(parseISO(update), "d 'de' MMMM @ hh:mm", { locale: ptBR })}</h6>
  }
  
  if(differenceInDays(new Date(), parseISO(postdate)) < 16) {
    return (
      <>
        <span>publicado {relativeDate} </span>
        {isUpdate && <UpdateBlock />}
      </>

    )
  } else return (
      <>
        <span>publicado em {defaultDate} </span> 
        {isUpdate && <UpdateBlock />}
      </>
    )
  }

export default DisplayDate