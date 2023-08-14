import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/To-Do";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Todo/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
