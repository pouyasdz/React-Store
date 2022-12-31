import Container from "./container";

function App() {
  return (
    <div className="app">
      <Container>
        <div style={{height:"100vh"}}>Child Component</div>
      </Container>
    </div>
  );
}

export default App;
