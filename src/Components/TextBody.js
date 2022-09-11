import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const ScrollLeft1 = keyframes`
0% {
    transform: translate(0, 100%);
  }
  100% {
    // transform: translate(-100%, 0);
    transform: translate(100%);
  }
`;

const RssBlock = styled.div`
  left: 0px;
  height: 80px;
  position: absolute;
  width: 1070px;
  overflow: hidden;
`;

const TextContent = styled.div`
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
`;

const Span1 = styled.span`
  display: inline-block;
  //   padding-left: 100%;
  padding-right: 100%;
  animation: ${ScrollLeft1} 20s linear infinite;
`;

export default function TextBody() {
  return (
    <RssBlock>
      <TextContent>
        <Span1>
          This is text - This is text - This is text - This is text - This is
          text - This is text - This is text - This is text - This is text -
          This is text - This is text - This is text -&nbsp;
        </Span1>
      </TextContent>
    </RssBlock>
  );
}
