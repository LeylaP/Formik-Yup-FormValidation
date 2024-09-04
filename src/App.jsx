import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RegisterForm />
    </div>
  );
}

export default App;
