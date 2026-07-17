const Divider = ({ text = "OR" }) => {
  return (
    <div className="my-7 flex items-center">
      <div className="h-px flex-1 bg-slate-200"></div>

      <span className="mx-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
        {text}
      </span>

      <div className="h-px flex-1 bg-slate-200"></div>
    </div>
  );
};

export default Divider;
