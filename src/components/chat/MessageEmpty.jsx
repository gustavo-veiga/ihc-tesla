import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../animations/animation-feed.json'

const MessageEmpty = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Lottie options={defaultOptions} height={450} width={450} />
  )
}

export default MessageEmpty
