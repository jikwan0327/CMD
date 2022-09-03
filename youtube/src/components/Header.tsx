import styled from "styled-components";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <Container>
      <Icon icon="bytesize:menu" fontSize="23" style={{ marginLeft: 20 }} />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100vw;
  height: 56px;
  border-bottom: 1px solid #e5e5e5;
`;
