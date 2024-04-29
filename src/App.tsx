import "./App.css";
import { Home } from "./pages/home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Learn } from "./pages/learn";
import { Swap } from "./pages/swap";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/swap" element={<Swap />} />
    </>
  )
);

function App() {
  return (
    <div className="App w-screen relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
