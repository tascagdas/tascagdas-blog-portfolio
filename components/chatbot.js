'use client'

import Script from 'next/script'
import React from 'react'

const ChatBbot = () => {
  return (
      <>
      <Script src='/chatbot.js' strategy='lazyOnload' onLoad={()=>initializeChatbot()} />
      </>
  )
}

export default ChatBbot