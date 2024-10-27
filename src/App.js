import Header from "./components/Header";
import ToDoItem from "./components/ToDoListApp/ToDoItem";
import TodoPage from "./pages/TodoPage";
import WeatherAPIPage from "./pages/WeatherAPIPage";
import PaginatedPage from "./pages/PaginatedPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/todo" Component={TodoPage} />
        <Route path="/weatherAPI" Component={WeatherAPIPage} />
        <Route path="/paginatedTable" Component={PaginatedPage} />
      </Routes>
    </Router>
  );
}

export default App;
