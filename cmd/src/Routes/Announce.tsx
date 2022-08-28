import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { getTv, IGetMoviesResult, IGetTvResult } from "../api";
import { useEffect, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

function Announce() {
  return (
    <Container>
      <Link to="/write">
        <Post>+ 글쓰기</Post>
      </Link>
      <Card></Card>
    </Container>
  );
}

export default Announce;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 2px;
  margin-top: 150px;
  width: 100vw;
`;

const Post = styled(motion.div)`
  position: absolute;
  right: 350px;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;

const Card = styled.div`
  margin-top: 50px;
  width: 900px;
  height: 90px;
  border-radius: 10px;
  background-color: white;
`;
