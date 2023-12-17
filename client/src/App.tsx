import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import "react-toastify/dist/ReactToastify.css";
import MessageAlert from "./component/messageAlert";

function App() {
  return (
    <>
      <MessageAlert />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
