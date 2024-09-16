import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/Index.jsx";
import "./index.css";

import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
