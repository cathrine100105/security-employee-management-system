import AuthHeader from "./AuthHeader";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100 lg:grid lg:grid-cols-2">
      <AuthHeader />

      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-100 blur-3xl opacity-50"></div>

        <div className="relative z-10 flex w-full justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
