import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button secondary>success</Button>
      <Button primary rounded>
        primary
      </Button>
      <Button secondary outline>
        secondary
      </Button>
      <Button warning outline>
        warning
      </Button>
      <Button danger outline>
        danger
      </Button>
    </div>
  );
}

export default App;
