type Person = {
  name: string;
  age: number;
};

function Header({ name, age }: Person) {
  return (
    <h1>
      {name} {age}
    </h1>
  );
}
export default Header;
