import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import useAuth from "../../hook/useAuth";
import axios from "axios";

const Login = () => {
    const {signInUser} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email}
            // navigate(location?.state ? location?.state : '/')
            axios.post("http://localhost:5000/jwt", user)
            .then(res => {
              console.log(res.data);
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="hero  min-h-screen my-20">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center pt-8">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-8">
            Do not have an account? <Link to="/register" className="text-orange-600 font-bold">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
