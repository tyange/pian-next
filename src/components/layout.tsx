import Header from "@/components/header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
