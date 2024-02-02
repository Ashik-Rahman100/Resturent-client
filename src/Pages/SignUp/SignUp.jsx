import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

export default function SignUp() {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, photoURL } = data;
    // console.log(name,email,password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photoURL).then(() => {
          reset();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "User profile updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        });
        navigate("/")
      })
      .catch((error) => {
        error.message = error;
      });
    // reset()
  };

  return (
    <>
      <Helmet>
        <title>Signup | Bistro boss</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">Name is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL", )}
                  className="input input-bordered"
                  required
                />
                {errors.photoURL && (
                  <p className="text-red-500 text-xs">Photo is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                  })}
                  className="input input-bordered"
                  required
                />
                {errors?.password?.type === "required" && (
                  <p className="text-red-500 text-xs">Password is required </p>
                )}
                {errors?.password?.type === "minLength" && (
                  <p className="text-red-500 text-xs">
                    Password is required At least 6 character
                  </p>
                )}
                {errors?.password?.type === "maxLength" && (
                  <p className="text-red-500 text-xs">
                    Password is required maximum 20 character
                  </p>
                )}
                {errors?.password?.type === "pattern" && (
                  <ul className="text-red-500 text-xs">
                    <li>At least one lowercase letter.</li>
                    <li> At least one uppercase letter.</li>
                    <li>At least one digit.</li>
                    <li>
                      At least one special character from the specified set.
                    </li>
                  </ul>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="px-6 pb-4">
              If you have an Account{" "}
              <Link className="underline hover:text-blue-500" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
