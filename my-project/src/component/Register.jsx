import React from 'react';

const Register = () => {
    return (
        <div className="">
            <div className="hero-content flex-col">
                <h1 className="text-2xl font-bold">Register now!</h1>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />

                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />


                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;