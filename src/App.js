import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ServicesPage from "./component/sevices/ServicesPage";
import Body from "./Body";
import WebBody from "./component/vezosWeb/WebBody";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/service",
      element: <ServicesPage />,
    },
    {
      path: "/vezosWeb",
      element: <WebBody />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
