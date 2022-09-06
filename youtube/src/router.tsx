import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Box from "./pages/box";
import Explore from "./pages/explore";
import Main from "./pages/Main";
import Subscribe from "./pages/subscribe";

function Router() {
  return (
    <BrowserRouter>
      <Header></Header>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/mypage" element={<></>}></Route>
        <Route path="/explore" element={<Explore></Explore>}></Route>
        <Route path="/subscribe" element={<Subscribe></Subscribe>}></Route>
        <Route path="/box" element={<Box></Box>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
