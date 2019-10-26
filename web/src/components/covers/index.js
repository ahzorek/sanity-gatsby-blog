import React from 'react'
import {Basic, FullCover, HalfCover, SimpleCover, VideoCover} from '../'

const PostCover = ({node}) => {
    switch(node.coverFormat){
      case 'fullCover':   return <FullCover {...node}/>
      case 'halfCover':   return <HalfCover {...node}/>
      case 'simpleCover': return <SimpleCover {...node}/>
      case 'videoCover':  return <VideoCover {...node}/>
      default: 
        return <Basic {...node} />
    }
}

export default PostCover