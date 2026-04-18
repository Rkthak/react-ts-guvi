import { Component, type ReactNode } from "react";

class App extends Component {
  render(): ReactNode {
    const name: string = "Raj";
    return <h1>hello {name}</h1>;
  }
}
export default App;
