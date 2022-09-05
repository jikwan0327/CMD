import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./pages/Main";

function Router() {
  return (
    <BrowserRouter>
      <Header></Header>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/mypage" element={<></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
