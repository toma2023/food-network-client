
import { Form, Link } from 'react-router-dom';



const Register = () => {
    // const { createUser, updateUser } = useContext(AuthContext);
    // const [error, setError] = useState('');
    // const navigate = useNavigate()
    // const location = useLocation()
    // const from = location?.state?.from?.pathname || '/'



    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const confirm = form.confirm.value;
        const password = form.password.value;
       

        // setError('')
        // if (password !== confirm) {
        //     setError('Your password did not match')
        //     return;
        // }
        // else if (password.length < 6) {
        //     setError('Password must be 6 characters or longer')
        //     return;
        // }

        // createUser(email, password)
        //     .then(res => {
        //         updateUser(name, photo)
        //             .then(res => navigate(`${from}`), form.reset())
        //             .catch(error => setError(error.message));
        //     })
        //     .catch(error => setError(error.message)); 
    }


    return (
        <div className='bg-gray-800 py-8'>
          <div className="hero-content flex-col lg:flex-row gap-4">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/sqRhNy3/Whats-App-Image-2023-08-07-at-8-40-47-PM-removebg-preview.png" alt="" />
                    </div>
                    <div className="card text-white flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-900">
                    <h2 className='text-purple-600  mt-8 text-center text-5xl font-bold'>Register Now</h2>
                    <Form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text text-white">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" required />
                           
                            <p><small className='text-red-600'>{""}</small></p>  
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-purple-600 py-2 rounded-md ">Register</button>
                        </div>
                        <p>Already have an account? <Link to="/login"><span className='text-purple-600  underline'>Login</span></Link> </p>
                        <p className='text-error'>{""}</p>
                    </Form>
                </div>

            </div>

        </div>
    );
};

export default Register;