
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import login from '../../images/login/signup.jpg';
const SignUp = () => {

// trying to update for git
useTitle('Signup')

  const { createUser, updateUser, emailVerify, googleSignIn, setLoading } = useContext(AuthContext)
  const { register, formState: { errors }, handleSubmit,reset  } = useForm();
  const [signupError, setSignupError] = useState(' ');
  const [isLoading,setIsLoading] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/login';
  const google = location.state?.from?.pathname || '/';
  const handleSignUp = (data) => {
    setSignupError('')
    createUser(data.email, data.password, data.option)
      .then(result => {
        const user = result.user
        handleVerifyEmail()
        toast.success("User created successfully please verify your email")
        reset()
        navigate(from, { replace: true })
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.option)
          })
          .catch(err => {

            console.log(err)

          })
      })
      .catch(error => {
        setLoading(false)
        console.log(error);
        setSignupError(error.message)
      })


  }


  const saveUser = (name, email, option ) => {
    const user = { name, email,role: option }
    fetch('http://localhost:5000/api/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {

      })
  }

  const handleVerifyEmail = () => {
    emailVerify()
      .then(() => { })
      .catch((error) => {
        signupError(error.message);
      });
  };


  const handleGoogle = () => {
    setIsLoading(true)
    googleSignIn()
        .then(result => {
          setIsLoading(false)
            const user = result.user;
            const socialUser = {
              name: user.displayName,
              email : user.email,
              image:user.photoURL

            };
            toast.success('Login Successfully')
              navigate(google, { replace: true })
            if (user) {
              fetch('http://localhost:5000/api/user',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body:JSON.stringify(socialUser),
              })
              .then(res=>res.json())
            .then(data =>{
              setIsLoading(false)
            })
                
            }

        })
        .catch(error => {
          setIsLoading(false)
          console.error(error)})
      }
 
  return (


    <div className="">
      <div className="relative">
        <img
          src={login}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h1 className='text-primary text-5xl mb-4'><span>Welcome to</span> <strong className='text-success'>Reclair Energy</strong></h1>
                <p className="max-w-xl text-white mb-4 text-base  md:text-lg">
                  through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider text-success duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >

                </a>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign up for Our Reclair
                  </h3>
                  <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Enter Your Name</span>
                      </label>
                      <input
                        className="input input-bordered w-full max-w-xs"
                        type="text"
                        placeholder="Name here"
                        {...register("name", { required: "Name is required" })}
                        aria-invalid={errors.mail ? "true" : "false"}
                      />
                      {errors.name && <p role="alert" className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Enter Your Email</span>
                      </label>
                      <input
                        className="input input-bordered w-full max-w-xs"
                        type="email"
                        placeholder="Email here"
                        {...register("email", { required: "Email Address is required" })}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && <p role="alert" className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-2">
                            <label
                                htmlFor="FirstName"
                                className="block text-sm font-medium "
                            >
                                Are you Organization or Investment ?
                            </label>

                            <select
                                name="option"
                                className="select select-bordered w-full max-w-xs my-2"
                                {...register('option', { required: "Option is required" })}
                            >
                                <option value="Organization" >Organization</option>
                                <option value="Investment">Investment </option>
                            </select>
                            {errors.option && <span className='text-error'>{errors.option?.message}</span>}
                        </div>

                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Enter Your Password</span>
                      </label>
                      <input
                        className="input input-bordered w-full max-w-xs"
                        type="password"
                        placeholder="Password here"
                        {...register("password", { required: "password is required", minLength: { value: 6, message: 'password must be 6 characters longer' } })}
                      />
                      {errors.password && <p role="alert" className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <input
                    
                    disabled ={
                      isLoading
                    }
                      className="btn btn-success w-80 mt-6"
                      value={`${isLoading ? 'Loading...' : 'signup'} `}
                      type="submit"
                    />
                    {signupError && <p className="text-red-600">{signupError}</p>}
                  </form>
                  <p className="mt-2 ml-2">
                    All ready have an account{" "}
                    <Link className="text-success text-2" to={"/login"}>
                      Login
                    </Link>
                  </p>
                  <div className="divider">OR</div>
                  <button 
                   disabled ={isLoading}
                  onClick={handleGoogle} className="btn w-80 btn-success">
                    Continue With Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;