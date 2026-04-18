import { Component } from "react";

interface Props {
  name: string;
  age: number;
}

class Header extends Component<Props> {
  render() {
    let { name, age } = this.props;
    return (
      <h1>
        hello {name} {age}
      </h1>
    );
  }
}
export default Header;
