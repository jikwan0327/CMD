import { Link, useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../img/logo.png";
import logo2 from "../img/logo2.png";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
  background-color: #111111;
  z-index: 99;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 40px;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => props.theme.white.darker};
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

const Logo = styled.img`
  width: 75px;
  height: 70px;
`;

const ItemButton = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  outline: 0;
  font-size: 15px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 370px;
`;

const Stick = styled.div`
  position: absolute;
  top: 30px;
  right: 350px;
  width: 1px;
  height: 53px;
  background-color: white;
`;

const Logout = styled.div`
  position: absolute;
  font-size: 13px;
  margin-left: 30px;
  color: #a3a3a3;
`;

function Header() {
  const [login, setLogin] = useState(false);
  const loginDB = () => {
    setLogin(!login);
  };

  return (
    <>
      {login ? (
        <Nav>
          <Col style={{ marginLeft: 300 }}>
            <Link to="/">
              <Logo src={logo2}></Logo>
            </Link>
            <Items style={{ marginLeft: 30 }}>
              <Item style={{ fontSize: 20, fontWeight: 500 }}>
                <Link to="/plan">시간표</Link>
              </Item>
              <Item style={{ fontSize: 20, fontWeight: 500 }}>
                <Link to="/announce">공지사항</Link>
              </Item>
              <Item style={{ fontSize: 20, fontWeight: 500 }}>
                <Link to="/student">학생정보</Link>
              </Item>
            </Items>
          </Col>
          <Col style={{ fontSize: 20, fontWeight: 500 }}>
            <Wrapper>
              1-2 최수장
              <Logout>&lsaquo; 로그아웃</Logout>
            </Wrapper>
            <Stick></Stick>
          </Col>
        </Nav>
      ) : (
        <Nav>
          <Col style={{ marginLeft: 300 }}>
            <Link to="/plan">
              <Logo src={logo2}></Logo>
            </Link>
            <Item style={{ marginLeft: 10, fontSize: 30, fontWeight: 500 }}>관리자</Item>
          </Col>
          <Col style={{ marginRight: 100 }}>
            <Items>
              <Item>
                <Link to="/plan">시간표</Link>
              </Item>
              <Item>
                <Link to="/announce">공지사항</Link>
              </Item>
              <Item>
                <Link to="/student">학생정보</Link>
              </Item>
              <Link to="/login">
                <ItemButton onClick={loginDB}>로그인</ItemButton>
              </Link>
            </Items>
          </Col>
        </Nav>
      )}
    </>
  );
}
export default Header;
