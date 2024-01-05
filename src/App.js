import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ServicesPage from "./component/sevices/ServicesPage";
import Body from "./Body";
import WebBody from "./component/vezosWeb/WebBody";
import MediaBody from "./component/vezosMedia/MediaBody";
import EditBody from "./component/vezosEdits/EditBody";
import MarketingBody from "./component/vezosMarketing/MarketingBody";

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
    {
      path: "/vezosmedia",
      element: <MediaBody />,
    },
    {
      path: "/vezosedit",
      element: <EditBody />,
    },
    {
      path: "/vezosemarket",
      element: <MarketingBody />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
