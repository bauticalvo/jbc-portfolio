import  { useEffect, useState } from "react";
import { FaHandPointer } from "react-icons/fa6";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target 
      if (target.closest("button, a, .hover-target")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-100 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {
        !isHovering ? (
          <>
            <div className={`w-6 h-6 rounded-full border-2 border-accent  mix-blend-difference opacity-80 flex items-center justify-center
              transition-transform duration-200 ease-in-out ${isHovering ? "scale-150" : "scale-100"}`}  />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full" />
          </>
        ) : (
          <FaHandPointer className="w-auto h-8 text-accent transition-transform duration-200 ease-in-out"/>
        )
      }

    </div>
  );
};

