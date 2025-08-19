import { useState, type ReactNode } from "react";
import Sidebar from "./sidebar";
import Appbar from "./Appbar";

interface LayoutProps {
  title?: string;
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [show, setshow] = useState(false);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar show={show} setshow={setshow} />
      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* App Bar */}
        <Appbar show={show} setshow={setshow} />
        {/* Content */}
        <main className="flex-1 overflow-y-auto md:px-6 px-2 py-8  bg-light_gray">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
