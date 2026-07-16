import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useRegister } from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const { mutate: loginMutate } = useLogin(() => {
    navigate("/");
  });

  const { mutate: registerMutate } = useRegister(() => {
    alert("Registration Successful");
    setIsLogin(true);
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      loginMutate({
        email: formData.email,
        password: formData.password,
      });
    } else {
      registerMutate({
        email: formData.email,
        password: formData.password,
        role: "ADMIN",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-5">
        <h1 className="border-b border-slate-700 text-3xl font-bold text-center italic tracking-widest">
          GUARD TRACK
        </h1>

        <p className="text-center text-gray-500 mb-8">
          {isLogin ? "Welcome Back" : "Create Admin Account"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                type="submit"
                onClick={() => setIsLogin(false)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have credentials?{" "}
              <button
                type="submit"
                onClick={() => setIsLogin(true)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
