import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import AuthLayout from "../../modules/auth/AuthLayout";
import AuthCard from "../../modules/auth/AuthCard";
import AuthInput from "../../modules/auth/AuthInput";
import AuthButton from "../../modules/auth/AuthButton";

import { useForgotPassword } from "../../hooks/useForgotPassword";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { mutate, isPending } = useForgotPassword();

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate({
      email,
    });
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Forgot Password?"
        subtitle="Enter your registered email address. We'll send you a password reset link."
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthInput
            label="Email"
            name="email"
            type="email"
            icon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <AuthButton loading={isPending}>Send Reset Link</AuthButton>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/authentication"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            ← Back to Login
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
};

export default ForgotPassword;
