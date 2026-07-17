import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, UserCog } from "lucide-react";

import { useLogin } from "../../hooks/useLogin";
import { useRegister } from "../../hooks/useRegister";

import AuthButton from "../../modules/auth/authButton";
import AuthInput from "../../modules/auth/AuthInput";
import AuthCard from "../../modules/auth/AuthCard";
import AuthLayout from "../../modules/auth/authLayout";

const Authentication = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
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
        role: "",
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

          {!isLogin && (
            <AuthInput
              label="Role"
              name="role"
              type="text"
              icon={UserCog}
              value={formData.role}
              onChange={handleChange}
            />
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
