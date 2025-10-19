import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Enquiry from "./Enquiry";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/enquiry", element: <Enquiry /> },
]);

export default route;
