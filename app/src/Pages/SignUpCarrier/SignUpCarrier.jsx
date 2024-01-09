import React, { useState } from 'react'
import './Signupcarrier.css'
const SignUpCarrier = () => {
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        state: '',
        zip_code: '',
        name: '',
        phone: '',
        email: '',
        password: '',
        image_url: '',
        in_business_since_year: '',
        mc_number: '',
        largest_trailer_capacity: '',
        certificate_of_insurance_url: '',
        expiration_date: '',
        cargo_limit: '',
        deductible: '',
        auto_policy_number: '',
        cargo_policy_number: '',
        agent_name: '',
        agent_phone: '',
        agent_email: '',
        w9_form_url: '',
        usdot_certificate_url: '',
        usdot_number: '',
    });
    const baseUrl = 'https://uship.onrender.com';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCarrierSignup = async () => {
        try {
            // Convert specific fields to the appropriate types before sending to the server
            const formattedData = {
              ...formData,
              in_business_since_year: parseInt(formData.in_business_since_year),
              largest_trailer_capacity: parseInt(formData.largest_trailer_capacity),
              cargo_limit: parseFloat(formData.cargo_limit),
              deductible: parseFloat(formData.deductible),
            };
        
            const response = await fetch(`${baseUrl}/auth/signup/carrier`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formattedData),
            });
        
            const responseData = await response.json();
        
            if (response.ok) {
              // Handle successful signup (e.g., redirect, set user state)
              console.log('Carrier signup successful!');
            } else {
              // Log more details about the error
              console.error('Carrier signup failed!', responseData || 'Unknown error');
            }
          } catch (error) {
            console.error('Error during carrier signup:', error);
          }
    };

    return (
        <div className="container">
            <h2>Carrier Signup</h2>
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
                <label>
                    In business since year:
                    <input type="number" name="in_business_since_year" value={formData.in_business_since_year} onChange={handleChange} min="10" max="100" />
                </label>
                <br />
                <label>
                    Mc Number:
                    <input type="text" name="mc_number" value={formData.mc_number} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Largest trailer capacity:
                    <input type="number" name="largest_trailer_capacity" value={formData.largest_trailer_capacity} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Certificate of insurance url:
                    <input type="text" name="certificate_of_insurance_url" value={formData.certificate_of_insurance_url} onChange={handleChange} />
                </label>
                <br />
                <label>
                    expiration_date:
                    <input type="date" name="expiration_date" value={formData.expiration_date} onChange={handleChange} />
                </label>
                <br />

                <label>
                    Cargo limit:
                    <input type="number" name="cargo_limit" value={formData.cargo_limit} onChange={handleChange} />
                </label>
                <br />
                <label>
                    deductible:
                    <input type="number" name="deductible" value={formData.deductible} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Auto policy number:
                    <input type="text" name="auto_policy_number" value={formData.auto_policy_number} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Agent name:
                    <input type="text" name="agent_name" value={formData.agent_name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Agent phone:
                    <input type="text" name="agent_phone" value={formData.agent_phone} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Agent email:
                    <input type="email" name="agent_email" value={formData.agent_email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    w9 form url:
                    <input type="text" name="w9_form_url" value={formData.w9_form_url} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Usdot certificate url:
                    <input type="text" name="usdot_certificate_url" value={formData.usdot_certificate_url} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Usdot number:
                    <input type="text" name="usdot_number" value={formData.usdot_number} onChange={handleChange} />
                </label>
                <br />

                <button type="button" onClick={handleCarrierSignup}>
                    Sign Up as Carrier
                </button>
            </form>
        </div>
    )
}

export default SignUpCarrier
