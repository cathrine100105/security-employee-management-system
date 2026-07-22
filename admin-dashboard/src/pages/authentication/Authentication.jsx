import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

import { useLogin } from "../../hooks/useLogin";
import { useRegister } from "../../hooks/useRegister";

import AuthButton from "../../modules/auth/AuthButton";
import AuthInput from "../../modules/auth/AuthInput";
import AuthCard from "../../modules/auth/AuthCard";
import AuthLayout from "../../modules/auth/AuthLayout";

const Authentication = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "ADMIN",
  });

  const { mutate: loginMutate, isPending: loginLoading } = useLogin(() => {
    navigate("/");
  });

  const { mutate: registerMutate, isPending: registerLoading } = useRegister(
    () => {
      alert("Registration Successful");

      setIsLogin(true);

      setFormData({
        email: "",
        password: "",
        role: "USER",
      });
    },
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
        role: formData.role,
      });
    }
  };

  return (
    <AuthLayout>
      <AuthCard
        title={isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        subtitle={
          isLogin
            ? "Sign in to continue managing your employees."
            : "Create your admin account."
        }
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthInput
            label="Email"
            name="email"
            type="email"
            icon={Mail}
            value={formData.email}
            onChange={handleChange}
          />

          <AuthInput
            label="Password"
            name="password"
            type="password"
            icon={Lock}
            value={formData.password}
            onChange={handleChange}
          />

          {isLogin && (
            <div className="flex justify-end -mt-2">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {!isLogin && (
            <div className="flex flex-col gap-2">
              <label className="absolute transition-all duration-200 pointer-events-none">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-7 pr-5 text-slate-400 transition hover:text-indigo-600"
              >
                <option value="ADMIN">Admin</option>
                <option value="USER">User</option>
              </select>
            </div>
          )}

          <AuthButton loading={isLogin ? loginLoading : registerLoading}>
            {isLogin ? "Sign In" : "Create Account"}
          </AuthButton>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </AuthCard>
    </AuthLayout>
  );
};

export default Authentication;
