import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const MousePointer = () => {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <motion.div
        style={{
          left: x,
          top: y,
        }}
        className="
        absolute
        w-72
        h-72
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-gradient-to-r
        from-indigo-500/15
        to-violet-500/15
        blur-[90px]
        "
      />
    </div>
  );
};

export default MousePointer;
