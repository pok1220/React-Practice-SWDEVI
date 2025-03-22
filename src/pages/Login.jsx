import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
export default function Login(){
    
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    });
    const {name,email,password,password2}=formData
    const onChange = (e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const onSubmit=(e)=>{
        e.preventDefault()
    }

    return(
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt/> Login
                </h1>
                <p>Please login to get support</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" className='form-control'
                        id='email' name='email' value={email} onChange={onChange}
                        placeholder='Enter Your email' required/>
                    </div>
                    <div className='form-group'>
                        <input type="password" className="form-control" id="password" name="password" value={password}
                        onChange={onChange} placeholder="Enter Your password" required/>
                    </div>
                    <div className='form-group'>
                        <button className='btn btnblock'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}