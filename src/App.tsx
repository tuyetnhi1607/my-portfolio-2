import "./App.css";
import { Home } from "./pages/home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Learn } from "./pages/learn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route path="/" element={<Home />}>
        {/* ... etc. */}
      </Route>
      <Route path="/learn" element={<Learn />} />
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
