import AuthHeader from "../auth/AuthHeader";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100 lg:grid lg:grid-cols-2">
      <AuthHeader />

      <div className="relative flex min-h-screen lg:min-h-0 items-center justify-center overflow-hidden px-4 sm:px-6 py-6 lg:py-10">
        <div className="absolute left-0 top-0 h-48 w-48 md:h-80 md:w-80 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 right-0 h-48 w-48 md:h-80 md:w-80 rounded-full bg-violet-100 blur-3xl opacity-50"></div>

        <div className="relative z-10 w-full max-w-sm md:max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
