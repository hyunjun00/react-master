import React from "react";
import { BrowserRouter, createBrowserRouter, Route } from "react-router-dom";
import Coins from "./routes/Coins.tsx";
import Coin from "./routes/Coin.tsx";
import Root from "./Root.tsx";
import Price from "./routes/Price.tsx";
import Chart from "./routes/Chart.tsx";

// function Router() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/:coinId">
//           <Coin />
//         </Route>
//         <Route path="/">
//           <Coins />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: `price`,
            element: <Price />,
          },
          {
            path: `chart`,
            element: <Chart />,
          },
        ],
      },
    ],
  },
]);

export default router;
