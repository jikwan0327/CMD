import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";

function SideBar() {
  const [home, setHome] = useState(false);
  const [compass, setCompass] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [box, setBox] = useState(false);

  return (
    <Container>
      <Background>
        <Icon icon="bytesize:menu" fontSize="23" style={{ marginTop: 15 }} />
      </Background>
      <Background>
        {home ? (
          <Icon icon="fluent:home-48-filled" fontSize="23" style={{ marginTop: 13 }} />
        ) : (
          <Icon icon="fluent:home-48-regular" fontSize="23" style={{ marginTop: 13 }} />
        )}
        <Text>홈</Text>
      </Background>
      <Background>
        {compass ? (
          <Icon icon="fa6-solid:compass" fontSize="23" style={{ marginTop: 13 }} />
        ) : (
          <Icon icon="fa6-regular:compass" fontSize="23" style={{ marginTop: 13 }} />
        )}
        <Text>탐색</Text>
      </Background>
      <Background>
        {subscribe ? (
          <Icon icon="ic:baseline-subscriptions" fontSize="23" style={{ marginTop: 13 }} />
        ) : (
          <Icon icon="ic:outline-subscriptions" fontSize="23" style={{ marginTop: 13 }} />
        )}
        <Text>구독</Text>
      </Background>
      <Background>
        {box ? (
          <Icon icon="mdi:play-box-multiple" fontSize="23" style={{ marginTop: 13 }} />
        ) : (
          <Icon icon="mdi:play-box-multiple-outline" fontSize="23" style={{ marginTop: 13 }} />
        )}
        <Text>보관함</Text>
      </Background>
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
`;

const Text = styled.div`
  font-size: 10px;
`;
