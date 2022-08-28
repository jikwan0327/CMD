import styled from "styled-components";
import logo from "../img/logo2.png";

function Info() {
  return (
    <Container>
      <Box>
        <Circle>
          <Logo src={logo}></Logo>
        </Circle>
        <Name>정지관</Name>
        <Wrapper>
          <FInfo>이름</FInfo>
          <FInfo>학번</FInfo>
          <FInfo>생년월일</FInfo>
          <FInfo>전공분야</FInfo>
        </Wrapper>
        <Wrapper>
          <BInfo>강용수</BInfo>
          <BInfo>1201</BInfo>
          <BInfo>2006.03.23</BInfo>
          <BInfo>디자인</BInfo>
        </Wrapper>
        <Stick></Stick>
        <Table>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Table>
      </Box>
    </Container>
  );
}

export default Info;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  background-color: white;
  margin-top: 130px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  width: 105px;
  height: 105px;
  border-radius: 100px;
  margin-top: 40px;
  margin-left: 40px;
`;

const Logo = styled.img`
  width: 80px;
  height: 75px;
`;

const Name = styled.div`
  margin-left: 18px;
  margin-top: 75px;
  font-size: 30px;
  color: #111111;
  font-weight: 600;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

const FInfo = styled.div`
  color: #787878;
  font-size: 18px;
  font-weight: 500;
  margin-top: 35px;
  margin-left: 50px;
`;

const BInfo = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin-top: 35px;
  margin-left: 150px;
`;

const Stick = styled.div`
  position: absolute;
  background-color: #787878;
  width: 3px;
  height: 300px;
  margin-top: 170px;
  margin-left: 480px;
`;

const Table = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-left: 550px;
  margin-top: 220px;
  gap: 30px;
`;

const Card = styled.div`
  width: 50px;
  height: 30px;
  background-color: #b0b0b0;
  border-radius: 3px;
`;
