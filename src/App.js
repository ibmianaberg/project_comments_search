import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout.js";
import { Comments } from "./pages/Comments/Comments.jsx";
import Main from "./pages/SearchPage/SearchPage.jsx";
import { useDispatch } from "react-redux";



const App = () => {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Comments />} />

          <Route path="search" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
