import Header from "@/components/header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
    </>
  );
};

export default Layout;
