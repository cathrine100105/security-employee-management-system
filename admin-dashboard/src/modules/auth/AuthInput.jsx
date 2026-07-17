import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const AuthInput = ({
  label,
  icon: Icon,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative mb-6">
      <div
        className={`flex items-center rounded-2xl border bg-white transition-all duration-300 ${
          focused
            ? "border-indigo-500 ring-4 ring-indigo-100 shadow-lg"
            : "border-slate-200"
        } ${error ? "border-red-500 ring-red-100" : ""}`}
      >
        {Icon && (
          <div
            className={`pl-5 transition-colors duration-300 ${
              focused ? "text-indigo-600" : "text-slate-400"
            }`}
          >
            <Icon size={20} />
          </div>
        )}

        <div className="relative flex-1">
          <input
            id={name}
            name={name}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder=" "
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="peer w-full bg-transparent px-4 pt-6 pb-2 text-slate-700 outline-none"
          />

          <label
            htmlFor={name}
            className={`absolute left-4 transition-all duration-200 pointer-events-none
              ${
                value || focused
                  ? "top-2 text-xs text-indigo-600"
                  : "top-1/2 -translate-y-1/2 text-slate-400"
              }`}
          >
            {label || placeholder}
          </label>
        </div>

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="pr-5 text-slate-400 transition hover:text-indigo-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && <p className="mt-2 ml-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default AuthInput;
