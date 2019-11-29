import React, {useState} from 'react';
import styled from 'styled-components'
import Layout from '../../layouts/mainLayout'
import mojs from 'mo-js'

import SupportButton from '../../components/SupportButton'

const lab = () => {
  const Numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven']
  const [x, setX] = useState(0)
  
  function updateCarousel(op, target){
    switch(op){
      case 'plus':  return setX(x !== 0 && x % (target.length - 1) === 0 ? 0 : x + 1);
      case 'minus': return setX(x === 0 ? (target.length - 1) : x - 1);
    }
  }
  console.log(event)
  return (
    <Layout>
      <div style={{
        width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
        <button onClick={e => updateCarousel('minus', Numbers)}>Before</button>
          <h1>{Numbers[x]}</h1>
        <button onClick={e => updateCarousel('plus', Numbers)}>Next</button>
      </div>
    </Layout>
  )
}

export default lab;
