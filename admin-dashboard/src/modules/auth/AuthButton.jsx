import { ArrowRight, Loader2 } from "lucide-react";

const AuthButton = ({ children, loading, ...props }) => {
  return (
    <button
      {...props}
      className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-400/40"
    >
      <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/30 transition-all duration-700 group-hover:left-[120%]" />

      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <div className="flex items-center gap-2">
          {children}

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </div>
      )}
    </button>
  );
};

export default AuthButton;
