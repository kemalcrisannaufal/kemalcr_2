import Navbar from "../Navbar";
import Footer from "../Footer";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center">
      <div className="w-full">
        <Navbar />
        <div className="w-full p-5 px-8 md:px-10 lg:px-20">{children}</div>
      </div>
      <div className="mb-20" />
      <Footer />
    </div>
  );
};

export default AppShell;
