import React from 'react'

const ListToRead = () => {
  let keyList = new Array
  if (typeof(localStorage) !== 'undefined' ){
    for(let i = 0; i < localStorage.length; i++){
      keyList.push(localStorage.key(i))
    }
  }
  const readList = keyList.filter(key => key.length === 36 ? true : false)
  if (readList.length > 0){
    return (
      <ul>
        { readList.map(id => {
          const data = JSON.parse(localStorage.getItem(id))
            return (
              <li key={id}>{data.title}</li>
            )
          })}
      </ul>
    )
  } else return <div>Não há items</div>
}

export default ListToRead
