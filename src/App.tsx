import Header from "./Components/Header";
function App() {
  const username: string = "Rak";
  return (
    <div>
      <Header />
      <h1>{username}</h1>
    </div>
  );
}
export default App;
