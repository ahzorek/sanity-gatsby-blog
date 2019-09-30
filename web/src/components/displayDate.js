import React from 'react'
import {format, formatDistanceToNow, differenceInDays, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import styled from 'styled-components'

const RelDate = styled.div`
  font-size: 12pt;
`

const DefDate = styled.div`
  font-size: 12pt;
  display: flex;
  flex-flow: row wrap;
  align-content: center;

`

const Update = styled.div`
  font-size: 8pt;

`

const DisplayDate = ({ showUpdate, relative, prefix, sFormat, dateInfo:{publishedAt, isUpdated, _updatedAt}}) => {
  const displayFormat = sFormat ? sFormat : "d 'de' MMMM 'de' yyyy"
  const defaultDate = format(parseISO(publishedAt), `${displayFormat}`, { locale: ptBR })
  const relativeDate = formatDistanceToNow(parseISO(publishedAt), { addSuffix: true, locale: ptBR })



  return (
    <>
      { (differenceInDays(new Date(), parseISO(publishedAt)) < 16) && relative  ?
        <RelDate title={defaultDate}>{prefix && prefix || ''}{' '}{relativeDate}</RelDate> :
        <DefDate title={relativeDate}>{prefix && prefix || ''}{' em '}{defaultDate} </DefDate> }
      {showUpdate === true && isUpdated && 
        <Update>atualizado em {format(parseISO(_updatedAt), "d 'de' MMMM @ hh:mm", { locale: ptBR })}</Update>
      }
    </>
  )
  }

export default DisplayDate