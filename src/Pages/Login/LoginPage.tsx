// src/components/LoginPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderMegaMenu } from '../Header/HeaderMegaMenu';
import { FooterLinks } from '../Footer/FooterLinks';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/register');
    };

    return (
        <>
            <HeaderMegaMenu />
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://media.istockphoto.com/id/2156928783/photo/contemporary-art-collage-hands-holding-puzzle-pieces-and-trying-to-connect-it-against-blue.webp?b=1&s=170667a&w=0&k=20&c=jPCmyriV0exMbocv0Sc2PsENsxYUGkX1yHVq98fErc4=')` }}>
                <div className="flex items-center justify-center h-full">
                    <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
                        <h2 className="text-2xl mb-4 text-center">LOGIN TO YOUR ACCOUNT</h2>
                        <div>
                            <input className="mb-2 p-2 w-full border rounded" type="text" placeholder="Email ID / Mobile No." />
                            <input className="mb-4 p-2 w-full border rounded" type="password" placeholder="Password" />
                            <button className="bg-blue-500 text-white p-2 w-full rounded" type="submit">LOGIN</button>
                        </div>
                        <p className="text-center text-sm mt-4">
                            New User? <span onClick={handleSignupClick} className="text-blue-500 cursor-pointer">Sign Up Now</span>! It's FREE!
                        </p>
                    </form>
                </div>
            </div>
            <FooterLinks />
        </>
    );
}

export default LoginPage;
