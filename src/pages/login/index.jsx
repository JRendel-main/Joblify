import { useState } from 'react'
import Layout from '@/components/Layout'
import LoginCard from '@/components/LoginCard'


const index = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <LoginCard/>
      </div>
    </Layout>
  )
}

export default index