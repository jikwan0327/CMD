import React, { useEffect, useState } from "react";
import styled from "styled-components";
import close from "../img/closeEye.png";
import open from "../img/openEye.png";
import { useCookies, Cookies } from "react-cookie";

function Login() {
  const [eyes, setEyes] = useState(false);
  const [saveId, setSaveId] = useState(false);
  const [id, setId] = useState("");

  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get("id") !== undefined) {
      setId(cookies.get("id"));
      setSaveId(true);
    }
  }, []);

  const IsSave = () => {
    if (saveId) {
      cookies.set("id", id);
    } else {
      cookies.remove("id");
    }
  };
  return (
    <Container>
      <Title>로그인</Title>
      <Input
        style={{ marginTop: 100 }}
        type="text"
        value={id}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setId(e.currentTarget.value);
        }}
        placeholder="아이디"
      ></Input>
      <Input type={eyes ? "text" : "password"} placeholder="비밀번호"></Input>
      <Eye onClick={() => setEyes(!eyes)} src={eyes ? close : open}></Eye>
      <Wrapper>
        <CheckBox type="checkbox" onClick={() => setSaveId(!saveId)}></CheckBox>
        <SaveId>아이디 저장</SaveId>
      </Wrapper>
      <Button onClick={IsSave}>로그인</Button>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
`;

const Title = styled.div`
  position: absolute;
  font-size: 30px;
  color: white;
  margin-right: 200px;
  font-weight: 500;
`;

const Eye = styled.img`
  position: absolute;
  margin-top: 190px;
  margin-left: 130px;
`;

const Input = styled.input`
  width: 300px;
  color: #ababab;
  padding: 10px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ababab;
  background-color: #111111;
  margin-top: 40px;
  font-size: 16px;
`;

const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: #cdcdcd;
  width: 300px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  margin-right: 180px;
`;

const CheckBox = styled.input``;

const SaveId = styled.div`
  color: white;
  margin-left: 10px;
`;
