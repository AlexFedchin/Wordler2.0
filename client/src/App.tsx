import { Button, Input, Alert } from "@heroui/react";

function App() {
  return (
    <div className="p-8 space-y-4">
      <Alert color="success">HeroUI and Tailwind are working!</Alert>
      <Input label="Name" placeholder="Enter your name" />
      <Button onPress={() => alert("Clicked!")} color="primary">
        Click me
      </Button>
    </div>
  );
}

export default App;
