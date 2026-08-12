import type { JSX } from "react";
import "@app/styles/index.css";
import { Button } from "@shared/ui/button";

const App = (): JSX.Element => (
  <>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <Button variant="outline">Button</Button>
  </>
);

export default App;
