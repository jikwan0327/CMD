import { createGlobalStyle } from "styled-components";
import Router from "./router";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
body {
  margin: 0;
  background-color: #F9F9F9;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router></Router>
    </>
  );
}

export default App;
