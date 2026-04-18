import Header from "./Components/Header";
function App() {
  const name: string = "Raj";
  let age: number = 23;
  return (
    <div>
      <Header name={name} age={age} />
    </div>
  );
}
export default App;
