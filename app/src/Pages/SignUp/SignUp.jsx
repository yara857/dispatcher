import React, { useState } from 'react';
// import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        state: '',
        zip_code: '',
        name: '',
        phone: '',
        email: '',
        password: '',
        image_url: null,
        in_business_since_year: '',
        mc_number: '',
        largest_trailer_capacity: '',
        certificate_of_insurance_url: null,
        expiration_date: '',
        cargo_limit: '',
        deductible: '',
        auto_policy_number: '',
        cargo_policy_number: '',
        agent_name: '',
        agent_phone: '',
        agent_email: '',
        w9_form_url: null,
        usdot_certificate_url: null,
        usdot_number: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    };
    const baseUrl = 'https://uship.onrender.com';
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            const response = await fetch(`${baseUrl}/auth/signup/shipper`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });

            console.log('Signup successful:', response.data);
            // Handle success, e.g., redirect or show a success message
        } catch (error) {
            console.error('Signup failed:', error.message);
            // Handle error, e.g., show an error message to the user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add your input fields here */}
            <h1>Sign Up as a carrier</h1>
            <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label><br></br>
            <label>
                City:
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </label><br></br>
            <label>
                state:
                <input type="text" name="state" value={formData.state} onChange={handleChange} />
            </label><br></br>
            <label>
                Zip Code:
                <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} />
            </label><br></br>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label><br></br>
            <label>
                Phone:
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </label><br></br>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label><br></br>
            <label>
                Image URL:
                <input type="file" name="image_url" onChange={handleChange} accept="image/*" />
            </label><br></br>
            <label>
                In business since year:
                <input type="text" name="in_business_since_year" value={formData.in_business_since_year} onChange={handleChange} />
            </label><br></br>
            <label>
                Mc Number:
                <input type="text" name="mc_number" value={formData.mc_number} onChange={handleChange} />
            </label><br></br>
            <label>
                Largest trailer capacity:
                <input type="text" name="largest_trailer_capacity" value={formData.largest_trailer_capacity} onChange={handleChange} />
            </label><br></br>
            <label>
                Certificate of Insurance (PDF):
                <input type="file" name="certificate_of_insurance_url" onChange={handleChange} accept="application/pdf" />
            </label><br></br>
            <label>
                Expiration date:
                <input type="date" name="expiration_date" value={formData.expiration_date} onChange={handleChange} />
            </label><br></br>
        
            <label>
                Cargo limit:
                <input type="text" name="cargo_limit" value={formData.cargo_limit} onChange={handleChange} />
            </label><br></br>
            <label>
                Deductible:
                <input type="text" name="deductible" value={formData.deductible} onChange={handleChange} />
            </label><br></br>
            <label>
                Auto Policy Number:
                <input type="text" name="auto_policy_number" value={formData.auto_policy_number} onChange={handleChange} />
            </label><br></br>
            <label>
                Cargo Policy Number:
                <input type="text" name="cargo_policy_number" value={formData.cargo_policy_number} onChange={handleChange} />
            </label><br></br>
    
            <label>
                Agent name:
                <input type="text" name="agent_name" value={formData.agent_name} onChange={handleChange} />
            </label><br></br>
            <label>
                Agent phone:
                <input type="tel" name="agent_phone" value={formData.agent_phone} onChange={handleChange} />
            </label><br></br>
            <label>
                Agent email:
                <input type="text" name="agent_email" value={formData.agent_email} onChange={handleChange} />
            </label><br></br>
            <label>
                W-9 Form (PDF):
                <input type="file" name="w9_form_url" onChange={handleChange} accept="application/pdf" />
            </label><br></br>
            <label>
                Usdot certificate (PDF):
                <input type="file" name="w9_form_url" onChange={handleChange} accept="application/pdf" />
            </label><br></br>
            <label>
                Usdot number:
                <input type="text" name="usdot_number" value={formData.usdot_number} onChange={handleChange} />
            </label><br></br>

            <button type="submit">Sign Up as a Carrier</button>
        </form>
    );
};

export default SignUp;
