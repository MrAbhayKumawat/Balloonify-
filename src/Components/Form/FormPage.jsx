import axios from 'axios';
import { useState } from 'react';
import "../Form/Form.css";

export default function FormPage() {
    const [formData, setFormData] = useState({
        Username: "",
        email: ""
    });
    const [dataresponse, setresponse] = useState();

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace this with your API

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(apiUrl, formData);
            setresponse(response.data);
            console.log(response.data);
            // Do something with the response, e.g., show success message, redirect, etc.
        } catch (error) {
            console.error('Error posting data:', error);
            // Handle error, e.g., show error message to the user
        }
    };
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form className="form" onSubmit={handleSubmit}>
                <p className="form-title">USER DATA POST TO API</p>
                <div className="input-container">
                    <input
                        placeholder="Enter email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <span>
                        <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                    </span>
                </div>
                <div className="input-container">
                    <input
                        placeholder="Username"
                        type="text"
                        name="Username"
                        value={formData.Username}
                        onChange={handleChange}
                    />
                    
                </div>
                <button className="submit  bg-purple-500" type="submit">
                    Post Data
                </button>
             
            </form>
            {
                dataresponse?
            <div className='mt-10'>
                <span>Email : </span><strong>{dataresponse.email}</strong><br/><br/>
                <span>Username : </span><strong>{dataresponse.Username}</strong>
            </div>:""
            }
        </div>
    );
}
