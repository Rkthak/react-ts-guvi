import { Component, type ReactNode } from "react";
import Header from "./Components/Header";

class App extends Component {
  render(): ReactNode {
    let name: string = "Rajkumar";
    let age: number = 23;
    return <Header name={name} age={age} />;
  }
}
export default App;
