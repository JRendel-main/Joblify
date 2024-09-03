import React from 'react'
import Navbar from '@/components/Navbar'

const DashboardLayout = ({ children }) => {
  return (
    <div>
        <Navbar />
        <div className="flex flex-col min-h-svh">
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout