import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { router } from "./routing";

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
