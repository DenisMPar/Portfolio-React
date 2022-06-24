import { RecoilRoot } from "recoil";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/home";
const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <RecoilRoot>
    <Home></Home>
  </RecoilRoot>
);
