import App from "../App.tsx";
import { createBrowserRouter } from "react-router-dom";

import { CharacterInfos } from "../pages/characterInfo.tsx";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/characterInfos/:id",
    element: <CharacterInfos />,
  },
]);
