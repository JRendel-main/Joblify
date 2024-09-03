import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import DashboardLayout from '@/components/DashboardLayout'

const index = () => {
    const router = useRouter()

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem('token')

                const response = await axios.get('http://localhost:3000/api/protected', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const userId = response.userId
            } catch (error) {
                window.alert(error)
                router.replace('/login')
            }
        }
        checkAuth()
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    };

  return (
    <DashboardLayout>
        
    </DashboardLayout>
  )
}

export default index