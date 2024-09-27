import Navbar from "../Navbar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="w-screen p-5">{children}</div>
    </div>
  );
};

export default AppShell;
