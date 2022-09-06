import styled from "styled-components";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const [click, setClick] = useState(1);

  const Select = (num: number) => {
    setClick(num);
  };

  return (
    <Container>
      <Background>
        <Icon icon="bytesize:menu" fontSize="23" style={{ marginTop: 15 }} />
      </Background>
      <Link to="/">
        <Background onClick={() => Select(1)}>
          {click === 1 ? (
            <Icon icon="fluent:home-48-filled" fontSize="23" style={{ marginTop: 13 }} />
          ) : (
            <Icon icon="fluent:home-48-regular" fontSize="23" style={{ marginTop: 13 }} />
          )}
          <Text>홈</Text>
        </Background>
      </Link>
      <Link to="/explore">
        <Background onClick={() => Select(2)}>
          {click === 2 ? (
            <Icon icon="fa6-solid:compass" fontSize="23" style={{ marginTop: 13 }} />
          ) : (
            <Icon icon="fa6-regular:compass" fontSize="23" style={{ marginTop: 13 }} />
          )}
          <Text>탐색</Text>
        </Background>
      </Link>
      <Link to="/subscribe">
        <Background onClick={() => Select(3)}>
          {click === 3 ? (
            <Icon icon="ic:baseline-subscriptions" fontSize="23" style={{ marginTop: 13 }} />
          ) : (
            <Icon icon="ic:outline-subscriptions" fontSize="23" style={{ marginTop: 13 }} />
          )}
          <Text>구독</Text>
        </Background>
      </Link>
      <Link to="/box">
        <Background onClick={() => Select(4)}>
          {click === 4 ? (
            <Icon icon="mdi:play-box-multiple" fontSize="23" style={{ marginTop: 13 }} />
          ) : (
            <Icon icon="mdi:play-box-multiple-outline" fontSize="23" style={{ marginTop: 13 }} />
          )}
          <Text>보관함</Text>
        </Background>
      </Link>
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 72px;
  height: 100vh;
  background-color: white;
  z-index: 99;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 72px;
  height: 65px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:nth-child(n + 2) {
    &:hover {
      background-color: #ececec;
    }
  }
`;

const Text = styled.div`
  font-size: 10px;
`;
