import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { getPopularMovies, IGetMoviesResult } from "../api";
import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

function Plan() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const arr2 = [0, 0, 0, 0, 0];

  return (
    <Back>
      <Day>2022년 8월 4주</Day>

      <Container>
        <Table>
          {arr.map((len, index) => (
            <Card key={index}></Card>
          ))}
        </Table>
        <Table>
          {arr.map((len, index) => (
            <Card key={index}></Card>
          ))}
        </Table>
        <Table>
          {arr.map((len, index) => (
            <Card key={index}></Card>
          ))}
        </Table>
        <Table>
          {arr.map((len, index) => (
            <Card key={index}></Card>
          ))}
        </Table>
        <Table>
          {arr.map((len, index) => (
            <Card key={index}></Card>
          ))}
        </Table>
        <Table>
          {arr.map((len, index) => (
            <Card key={index}></Card>
          ))}
        </Table>
      </Container>
    </Back>
  );
}

export default Plan;

const Back = styled.div`
  display: flex;
  flex-direction: column;
  left: 100px;
  margin-top: 150px;
  margin-left: 260px;
`;

const Container = styled.div`
  display: flex;
`;

const Day = styled.div`
  font-size: 35px;
  font-weight: 600;
  color: white;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  width: 100px;
  height: 50px;
  border-top: 1px solid white;
  border-right: 1px solid white;
`;
