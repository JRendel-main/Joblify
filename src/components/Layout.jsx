import React from 'react'
import { Work_Sans } from "next/font/google";

const inter = ({ subsets: ['latin'], display:['swap']})

const Layout = ({ children }) => {
  return (
    <div className={`flex flex-col min-h-dvh ${inter.className}`}>
        {children}
    </div>
  )
}

export default Layout