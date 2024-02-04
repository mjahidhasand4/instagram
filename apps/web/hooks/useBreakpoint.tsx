"use client";
import { useContext } from "react";
import { BreakpointContext } from "../context";

const useBreakpoint = () => {
  const breakpoint = useContext(BreakpointContext);

  if (!breakpoint) {
    throw new Error("undefined Breakpoint");
  }

  return breakpoint;
};

export default useBreakpoint;