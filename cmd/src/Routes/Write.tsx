import styled from "styled-components";

function Write() {
  return (
    <Container>
      <Box>
        <Title type="text" placeholder="제목"></Title>
        <Content placeholder="내용을 입력하세요"></Content>
      </Box>
      <Button>완료</Button>
    </Container>
  );
}

export default Write;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1000px;
  height: 580px;
  background-color: white;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border: 0;
  outline: 0;
  margin-top: 30px;
  margin-left: 900px;
`;

const Title = styled.input`
  margin-top: 30px;
  width: 900px;
  height: 50px;
  color: #a3a3a3;
  border: 0;
  outline: 0;
  padding: 30px 0px;
  border-bottom: 1px solid #a3a3a3;
  font-size: 30px;
`;

const Content = styled.textarea`
  color: #a3a3a3;
  outline: 0;
  width: 900px;
  border: 0;
  outline: 0;
  height: 500px;
  padding: 30px 0px;
  font-size: 17px;
`;
