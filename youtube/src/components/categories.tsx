import styled from "styled-components";

function Categories() {
  return <Container></Container>;
}

export default Categories;

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 100vw;
  height: 56px;
  border-bottom: 1px solid #e5e5e5;
  z-index: 98;
  top: 56px;
`;
