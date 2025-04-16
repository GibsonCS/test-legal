import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../Pages/Layout";
import { App } from "../Pages/App";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
