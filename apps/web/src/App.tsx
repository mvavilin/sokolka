import type { JSX } from "react";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Header, Counter } from "@repo/ui";

const App = (): JSX.Element => (
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
      <img
        src={typescriptLogo}
        className="logo vanilla"
        alt="TypeScript logo"
      />
    </a>
    <Header title="Web" />
    <div className="card">
      <Counter />
    </div>
  </div>
);

export default App;
