import { useEffect, useState } from "react";
import styled from "styled-components";
import { videos } from "../api";
import { useQuery } from "@tanstack/react-query";

function Videos() {
  const { isLoading, data } = useQuery(["video"], videos);

  console.log(data?.data.items);

  return (
    <Container>
      {data?.data.items.map((a: any) => (
        <Wrapper>
          <Img src={a.snippet.thumbnails.medium.url}></Img>
          <Title>{a.snippet.title}</Title>
          <ChannelName>{a.snippet.channelTitle}</ChannelName>
        </Wrapper>
      ))}
    </Container>
  );
}

export default Videos;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: absolute;
  top: 120px;
  left: 120px;
  right: 200px;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 290px;
  border: 1px solid black;
`;

const Img = styled.img`
  width: 300px;
  height: 150px;
`;

const Title = styled.div`
  color: ${(props) => props.theme.black.default};
  font-size: 14px;
  margin-left: 40px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
`;

const ChannelName = styled.div`
  margin-left: 40px;
  margin-top: 7px;
  font-size: 12px;
  color: #030303;
`;
