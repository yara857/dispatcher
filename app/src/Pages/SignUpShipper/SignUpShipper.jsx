import React, { useState } from 'react'
// import './Signupshipper.css'

const SignUpShipper = () => {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    zip_code: '',
    email: '',
    name: '',
    password: '',
    phone: '',
    image_url: '',
  });

  const baseUrl = 'https://uship.onrender.com';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    try {
      const response = await fetch(`${baseUrl}/auth/signup/shipper`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Handle successful signup (e.g., redirect, set user state)
        console.log('Signup successful!');
      } else {
        // Log more details about the error
        console.error('Signup failed!', responseData || 'Unknown error');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="w-16 md:w-32 lg:w-48">
      <h2 className=''>Shipper Signup</h2>
      <form method='POST'>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />

        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </label>
        <br />

        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} />
        </label>
        <br />

        <label>
          Zip Code:
          <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} />
        </label>
        <br />

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />

        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />

        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <br />

        <label>
          Image URL:
          <input type="file" name="image_url" value={formData.image_url} onChange={handleChange} />
        </label>
        <br />

        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpShipper
