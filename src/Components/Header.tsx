import { Component, type ReactNode } from "react";
interface Props {
  name: string;
  age: number;
}

class Header extends Component<Props> {
  render(): ReactNode {
    return (
      <h1>
        hello {this.props.name}! I am {this.props.age} years old{" "}
      </h1>
    );
  }
}
export default Header;
