import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Lock } from "lucide-react";

import AuthLayout from "../../modules/auth/AuthLayout";
import AuthCard from "../../modules/auth/AuthCard";
import AuthInput from "../../modules/auth/AuthInput";
import AuthButton from "../../modules/auth/AuthButton";

import { useResetPassword } from "../../hooks/useResetPassword";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  console.log("Token:", token);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const { mutate, isPending } = useResetPassword(() => {
    navigate("/authentication");
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    mutate({
      token,
      newPassword: formData.newPassword,
    });
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Reset Password"
        subtitle="Enter your new password below."
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthInput
            label="New Password"
            name="newPassword"
            type="password"
            icon={Lock}
            value={formData.newPassword}
            onChange={handleChange}
          />

          <AuthInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            icon={Lock}
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <AuthButton loading={isPending}>Reset Password</AuthButton>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default ResetPassword;
