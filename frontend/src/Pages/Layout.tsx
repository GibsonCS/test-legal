import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Index";

export const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-sky-950 to-sky-600">
      <Header />
      <Outlet />
    </main>
  );
};
