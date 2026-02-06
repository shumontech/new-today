import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';   

const Register = () => {

 
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User created:", user);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <h3 className="text-3xl font-bold text-center">Register Here</h3>

            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Your Name" required />

            <label className="label">Photo Url</label>
            <input type="text" name="photo" className="input" placeholder="Photo Url" />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required />

            <div><a className="link link-hover">Forgot password?</a></div>

            <button className="btn btn-neutral mt-4">Register</button>

            <p className='font-semibold text-center'>
              Already have an account{" "}
              <Link className='text-red-500' to="/auth/login">Please Login</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
