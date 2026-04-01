import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="app-root">
      <div className="app-card">
        <h1 className="app-title">
          Client-Side Form Validation
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;