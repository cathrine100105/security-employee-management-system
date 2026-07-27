import { motion } from "framer-motion";

const AuthCard = ({ title, subtitle, children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="relative mx-auto w-full max-w-sm md:max-w-md"
    >
      <div className="absolute inset-0 rounded-[34px] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 opacity-20 blur-2xl"></div>

      <div className="rounded-[34px] bg-gradient-to-br from-indigo-300/60 via-violet-200/60 to-white p-[1px]">
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/60 bg-white/90 p-5 sm:p-6 md:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.15)] backdrop-blur-xl">
          <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-indigo-100 blur-3xl opacity-70"></div>

          <div className="absolute -left-20 -bottom-20 h-44 w-44 rounded-full bg-violet-100 blur-3xl opacity-70"></div>

          <div className="relative z-10">
            <div className="mb-5 md:mb-8 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800">{title}</h1>

              <p className="mt-2 text-sm md:text-base text-slate-500 leading-6 md:leading-7">{subtitle}</p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthCard;
