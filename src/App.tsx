import { Component, type ReactNode } from "react";
import Header from "./components/Header";

class App extends Component {
  render(): ReactNode {
    const name: string = "Raj";
    let age: number = 23;
    return <Header name={name} age={age} />;
  }
}
export default App;
