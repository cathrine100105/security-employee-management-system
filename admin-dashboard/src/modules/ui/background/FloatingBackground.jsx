const FloatingBackground = () => {
  return (
    <>
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-pulse" />

      <div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div
        className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/10 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="absolute top-16 right-16 h-32 w-32 rounded-full bg-cyan-300/20 blur-2xl animate-pulse"
        style={{ animationDelay: "3s" }}
      />

      <div
        className="absolute bottom-24 left-24 h-28 w-28 rounded-full bg-indigo-300/20 blur-2xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />
    </>
  );
};

export default FloatingBackground;
