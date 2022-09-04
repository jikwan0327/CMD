import styled from "styled-components";
import { Icon } from "@iconify/react";

function SideBar() {
  return (
    <Container>
      <Icon icon="bytesize:menu" fontSize="23" style={{ marginTop: 15 }} />
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 72px;
  height: 100vh;
  background-color: white;
  z-index: 99;
`;
