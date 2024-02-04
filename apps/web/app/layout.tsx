import "../styles/globals.css";
import type { Metadata } from "next";
import BreakpointProvider from "../context/breakpoint-provider";
import { AppBar } from "../components";

export const metadata: Metadata = {
  title: "Instagram",
};

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <BreakpointProvider>
          <AppBar />
          {children}
        </BreakpointProvider>
      </body>
    </html>
  );
};

export default RootLayout;