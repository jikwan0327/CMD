import styled from "styled-components";
import logo from "../img/stCMD.png";
import { Link } from "react-router-dom";

function Student() {
  return (
    <Background>
      <Container>
        <Box>
          <Logo src={logo}></Logo>
          <Wrapper>
            <Name>1214 정지관</Name>
            <Link to="/info">
              <Add>더보기 &gt;</Add>
            </Link>
          </Wrapper>
        </Box>
      </Container>
    </Background>
  );
}

export default Student;

const Background = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 150px;
  width: 1200px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 300px;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
`;

const Add = styled.div`
  margin-left: 20px;
  margin-top: 5px;
`;
