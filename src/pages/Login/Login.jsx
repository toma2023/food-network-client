import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";



const Login = () => {
    const { signIn, auth, signInGoogle, signInGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const loggedInUser = result.user;
                navigate(from, { replace: true })
                setUser(loggedInUser)
            })
            .catch(error => {
                setError(error.message)
            })

    }

    const handleGithubSignIn = () => {
        signInGithub()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })

                setUser(loggedUser);
            })
            .catch(error => {
                setError(error.message)
            })

    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;

                navigate(from, { replace: true })
            })
            .catch(error => {
                setError("password dose n't match")
            })
    }


    return (
        <div>
            <div className="hero min-h-screen mb-12 bg-gray-800">
                <div className="hero-content flex-col lg:flex-row gap-4">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/sqRhNy3/Whats-App-Image-2023-08-07-at-8-40-47-PM-removebg-preview.png" alt="" />
                    </div>
                    <div className="card text-white flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-900">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center">Login now!</h1>
                            <div>
                                <Form onSubmit={handleLogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" className="input input-bordered text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt text-white link link-hover">Forgot password?</a>
                                        </label>
                                        <p><small className='text-red-600 '>{error}</small></p>
                                    </div>
                                    <div className="form-control ">
                                        <button className="bg-purple-600 py-2 rounded-md ">Login</button>
                                    </div>

                                </Form>
                                <div className="text-center">
                                    <p>Don't have an account? <Link to="/register"><span className='text-purple-600  underline'>Register</span></Link> </p>
                                    <p className='text-lg'>Sign in with:</p>
                                    <div className='flex justify-center mx-auto gap-3 text-center mt-3'>
                                        <div className="form-control  ">
                                            <button onClick={handleGoogleSignIn} className="bg-purple-600 p-4 rounded-md"> <span><FaGoogle></FaGoogle></span> </button>
                                        </div>
                                        <div className="form-control  ">
                                            <button onClick={handleGithubSignIn} className="bg-purple-600 p-4 rounded-md"><span><FaGithub></FaGithub></span> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;