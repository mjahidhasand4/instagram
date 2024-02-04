"use client";
import { createContext, useEffect, useState } from "react";

export const BreakpointContext = createContext({
  isSmall: false,
  isMedium: false,
  isLarge: false,
});

export const BreakpointProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({
    isSmall: false,
    isMedium: false,
    isLarge: false,
  });

  useEffect(() => {
    const updateResize = () => {
      setState({
        isSmall: innerWidth < 768,
        isMedium: innerWidth >= 768 && innerWidth < 1268,
        isLarge: innerWidth >= 1268,
      });
    };

    updateResize();
    window.addEventListener("resize", updateResize);
    return () => window.removeEventListener("resize", updateResize);
  }, []);

  return (
    <BreakpointContext.Provider value={state}>
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointProvider;