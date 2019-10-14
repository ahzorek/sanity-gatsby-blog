import React, {useState} from 'react';
import styled from 'styled-components'
import Layout from '../../layouts/mainLayout'

const lab = () => {
  const [state, setState] = useState(false)
  return (
    <Layout>
      <LinkWrapper>
        <a onMouseOver={e => console.log(e)} href="about:blank">Link 1</a>
        <a onMouseOver={e => console.log(e)} href="about:blank">Link 2</a>
        <a onMouseOver={e => console.log(e)} href="about:blank">Link 3</a>
        <a onMouseOver={e => console.log(e)} href="about:blank">Link 4</a>
        <a onMouseOver={e => console.log(e)} href="about:blank">Link 5</a>
        <HagaUm>Teste!</HagaUm>
      </LinkWrapper>
      <Switch onClick={e => setState(prev => !prev)} status={state} />



    </Layout>
  )
}

const Switch = styled.div`
  margin: auto;
  position: relative;
  width: 48px;
  height: 26px;
  border-radius: .8rem;
  background: fuchsia;
  box-shadow: inset 0 1px 3px rgba(20,20,20,.1);
  & ::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 21px;
    height: 20px;
    border-radius: .8rem;
    top: 3px;
    left: 3px;
    transform: ${props => props.status && 'translateX(21px)'};
    transition: transform 300ms ease-in-out;

    background: darkblue;

  }
  &:hover {
    & ::after {
      border: 1px solid rgba(200, 200, 255, .5);
    }
  }
`

const Wrapper = styled.div`
  background-color: rgb(20,20,20);
  display: flex;
  flex-flow: collumn wrap;
  justify-content: space-evenly;
  font-family: sans-serif;
`
const LinkWrapper = styled.div`
  display: contents;
  &:hover {
    & a {
      color: rgba(245,245,245,.2);
    }
  }
  & a {
    color: rgba(245,245,245,1);
    padding: 1.5rem;
    text-decoration: none;
    transition: all 500ms ease;
    &:hover {
      color: rgba(245,245,245,1);
    }
  }
`
const HagaUm = styled.h1`
  ${props => props.theme.defaults.h1};
`

export default lab;
