import "./App.scss";
import Helmet from "react-helmet";
import Nav from "./components/Nav.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div>
      <div className="App">
        <Helmet>
          <title>Frontend Mentor | Interactive pricing component</title>
        </Helmet>
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
