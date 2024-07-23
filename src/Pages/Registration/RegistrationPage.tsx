// src/components/RegistrationPage.tsx
import React from 'react';
import { HeaderMegaMenu } from '../Header/HeaderMegaMenu';
import { FooterLinks } from '../Footer/FooterLinks';

const RegistrationPage: React.FC = () => {
  return (
    <>
    <HeaderMegaMenu/>
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hlciUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D')` }}>
      <div className="flex items-center justify-center h-full">
        <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl mb-4">Sign up as a Tutor</h2>
          <div>
            <input className="mb-2 p-2 w-full border rounded" type="text" placeholder="Enter your Full name Eg: Amit Singh" />
            <input className="mb-2 p-2 w-full border rounded" type="email" placeholder="Enter your Email Eg: amit@gmail.com" />
            <div className="flex mb-2">
              <select className="p-2 border rounded-l w-1/4">
                <option>India(+91)</option>
                {/* Add other country codes */}
              </select>
              <input className="p-2 border rounded-r w-3/4" type="tel" placeholder="Enter your Mobile Number" />
            </div>
            <select className="mb-2 p-2 w-full border rounded">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input className="mb-2 p-2 w-full border rounded" type="text" placeholder="Enter the main category you Teach" />
            <input className="mb-4 p-2 w-full border rounded" type="text" placeholder="Enter Pincode or Locality Eg: 560076 or JP Nagar" />
            <button className="bg-blue-500 text-white p-2 w-full rounded" type="submit">Create Profile</button>
          </div>
          <p className="text-center text-sm mt-4">By Signing Up, you agree to our <a href="#" className="text-blue-500">Terms of Use</a> & <a href="#" className="text-blue-500">Privacy Policy</a></p>
        </form>
      </div>
    </div>
    <FooterLinks/>
    </>
  );
}

export default RegistrationPage;
