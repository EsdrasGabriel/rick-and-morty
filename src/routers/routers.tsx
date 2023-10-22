import App from "../App.tsx";
import { createBrowserRouter } from "react-router-dom";

import { CharacterInfos } from "../pages/characterInfo.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/characterInfos",
    element: <CharacterInfos />,
  },
]);
