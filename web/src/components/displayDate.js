import React from 'react'
import {format, formatDistanceToNow, differenceInMonths, parseISO} from 'date-fns'
import { ptBR } from 'date-fns/locale'

const DisplayDate = ({postdate, update, isUpdate}) => {

    const defaultDate = format(parseISO(postdate), "d 'de' MMMM 'de' yyyy @ hh:mm", { locale: ptBR })
    const relativeDate = formatDistanceToNow(parseISO(postdate), { addSuffix: true, locale: ptBR })
    //format(parseISO(update), "d 'de' MMMM @ hh:mm", { locale: ptBR })
    
    if(differenceInMonths(new Date(), parseISO(postdate)) < 3) {
        return <span>{relativeDate}{isUpdate && console.log(update)}</span>
    } else {
        return <span>{defaultDate}</span> 
    }
}

export default DisplayDate