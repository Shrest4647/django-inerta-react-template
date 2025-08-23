import Sidebar from "./sidebar";

const Layout = ({ children }, ...props) => {
  return (
    <div className="h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 min-w-sm overflow-auto p-6">{children}</div>
    </div>
  );
};

export default (page) => <Layout>{page}</Layout>;
