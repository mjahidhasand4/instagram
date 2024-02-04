import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram",
};

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;