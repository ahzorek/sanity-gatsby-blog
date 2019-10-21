import React from 'react'
import styled from 'styled-components'

const ImageTest = () => (
    <>
    <Wrapper>
        <BackLens />
        <Image src="https://images-na.ssl-images-amazon.com/images/I/61ASqrI44yL._UL1057_.jpg" />
        <FrontLens />
    </Wrapper>
    <div style={{background: 'rgb(245,245,245)', width: 'auto'}}>
        <Illus src="https://cdn.pixabay.com/photo/2019/09/17/07/37/leo-4482769_960_720.jpg"/>
    </div>
    </>
)

const Wrapper = styled.div`
    position: relative;
    width: auto;
    min-height: 100vh;
`
const Illus = styled.img`
    padding: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* filter: contrast(1.5); */
    mix-blend-mode: difference;
    opacity: .8;
`


const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    filter: saturate(0) contrast(1.4);
    mix-blend-mode: luminosity;
`

const FrontLens = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: orangered;
    mix-blend-mode: lighten;
    opacity: .6;
    transition: all 500ms ease;
`

const BackLens = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    mix-blend-mode: darken;
    opacity: .7;
    background-color: blue;
`

export default ImageTest