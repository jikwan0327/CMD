import styled from "styled-components";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <Container>
      <Icon icon="logos:youtube" fontSize="20" style={{ marginLeft: 75, cursor: "pointer" }}></Icon>
      <Wrapper>
        <Search placeholder="검색"></Search>
        <SearchBtn>
          <Icon icon="ant-design:search-outlined" width="24" />
        </SearchBtn>
        <Mic>
          <Icon icon="ic:baseline-mic" width="24" />
        </Mic>
      </Wrapper>
      <Wrapper>
        <Dots>&#x22ee;</Dots>
        <Login>
          <Icon
            icon="iconoir:profile-circled"
            fontSize="22"
            fontWeight="200"
            style={{ marginLeft: 10, marginRight: 10 }}
            color="#065fd4"
          />
          로그인
        </Login>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 100vw;
  height: 56px;
  border-bottom: 1px solid #e5e5e5;
  z-index: 99;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Search = styled.input`
  width: 532px;
  height: 37px;
  outline: 0;
  border: 0;
  border: 1px solid ${(props) => props.theme.gray.dark};
  padding-left: 8px;
  font-size: 16px;
  font-weight: 350;
`;

const SearchBtn = styled.button`
  width: 64px;
  height: 41px;
  cursor: pointer;
  border: 0;
  outline: 0;
  border-bottom: 1px solid ${(props) => props.theme.gray.border};
  border-top: 1px solid ${(props) => props.theme.gray.border};
  border-right: 1px solid ${(props) => props.theme.gray.border};
  background-color: ${(props) => props.theme.gray.light};
`;

const Mic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.gray.light};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-left: 8px;
  cursor: pointer;
`;

const Dots = styled.div`
  cursor: pointer;
  font-size: 25px;
`;

const Login = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  width: 94px;
  height: 36px;
  border: 1px solid ${(props) => props.theme.blue.login};
  color: ${(props) => props.theme.blue.login};
  margin-right: 30px;
  margin-left: 15px;
`;
