import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const LoginForm = ({ onSubmit, isLoading, error }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email, password }); // Pass the form data to the parent component
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Username:</Label>
                    <Input
                        id="email"
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password:</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>
            {error && <div className="error">{error}</div>} {/* Display error if present */}
            <Button className="w-full mt-6" type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
            </Button>
        </form>
    );
};

export default LoginForm