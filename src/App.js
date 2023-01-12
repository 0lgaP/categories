import "./App.css";
import CategoryList from "./components/CategoryList";
import NavBar from "./components/LinkedItems/NavBar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Draw from "./components/Pages/Draw";
import Settings from "./components/Pages/Settings";
import Card from "./components/UI/Card";
import Main from "./components/Pages/Main";

function App() {
  
  return (
    <Router>
      <Card>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<CategoryList/>}/>
          <Route path="/draw" element={<Draw/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
        </Card>
    </Router>
  );
}

export default App;
