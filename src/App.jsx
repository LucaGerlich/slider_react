import "./App.scss";
import Nav from "./components/Nav.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
        </header>
        <Card></Card>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
