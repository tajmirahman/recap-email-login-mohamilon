import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate= useNavigate();
    const {registerUser}=useContext(AuthContext)

    const handleRegister=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log(name,email,password)

        registerUser(email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset();
            navigate('/login')
        })
        .catch(error=>{
            console.log('Error', error)
        })

    }

    return (
        <div className="">
            <div className="hero-content flex-col">
                <h1 className="text-2xl font-bold">Register now!</h1>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />

                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />


                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                        <p>If you have already an account? please <Link className='text-green-300 underline' to={'/login'}>login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;