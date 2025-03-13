import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate= useNavigate();

    const {signInUser}=useContext(AuthContext);

    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log(email, password);

        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset();
            navigate('/profile')
        })
        .catch(error=>{
            console.log("Error",error)
        })
    }


    return (
        <div className="">
            <div className="hero-content flex-col">
            <h1 className="text-2xl font-bold">Login now!</h1>
                
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        <p>If you don't have an account? please <Link className='text-green-300 underline' to={'/register'}>resgister</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;