import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/mypage" element={<></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
