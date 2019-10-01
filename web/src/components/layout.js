import React from 'react'
import styled from 'styled-components'
import '../styles/layout.css'

const BodyWrapper = styled.div`
  background-color: #e7ebed;
  min-height: calc(100% - 73px - 120px);
  overflow: hidden;
  @media (min-width: 450px) {
    min-height: calc(100% - 91px - 155px);
  }
`
const Layout = props => {
  const {children} = props

  return(
    <BodyWrapper>              
      {children}
    </BodyWrapper>
  )
}

export default Layout


{/* <footer className={styles.footer}>
<div className={styles.footerWrapper}></div>
</footer> */}