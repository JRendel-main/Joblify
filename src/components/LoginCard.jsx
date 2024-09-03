import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useState } from 'react'
import LoginForm from './LoginForm'; 
import axios from 'axios'
import { useRouter } from 'next/router'

const LoginCard = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [alert, setAlert] = useState(null)

    const handleSubmit = async (formData) => {
        setIsLoading(true);
        setAlert(null);

        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                username: formData.email,
                password: formData.password,
            }, {
                validateStatus: (status) => status === 200 || status === 401,
            });

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                router.replace('/dashboard');
            } else if (response.status === 401) {
                window.alert('Wrong username/password!')
                setIsLoading(false);
            }
        } catch (err) {
            // Handle network errors or other unexpected errors
            console.error('Error:', err);
            window.alert('An error occurred during login. Please try again later.');
            setIsLoading(false);
        }
    }

    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Login to Joblify</CardTitle>
                <CardDescription>Enter your credentials to access your account.</CardDescription>
            </CardHeader>
            <CardContent className="mt-2">
                {alert && (
                    <Alert variant={alert.type === 'error' ? 'destructive' : 'default'} className="mb-4">
                        <AlertTitle>{alert.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
                        <AlertDescription>{alert.message}</AlertDescription>
                    </Alert>
                )}
                <LoginForm onSubmit={handleSubmit} isLoading={isLoading} error={alert?.message} />
            </CardContent>
            <CardFooter className="flex justify-center">
                <p className="text-sm text-muted-foreground">
                    Don&apos;t have an account? {" "}
                    <Link href="/register" className="text-primary hover:underline">Register</Link>
                </p>
            </CardFooter>
        </Card>
    )
}

export default LoginCard