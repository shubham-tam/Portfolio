import React from "react";
import {
  Container,
  Body,
  ImageNEB,
  Heading,
  TextContent,
  Text,
  Link,
} from "..//..//Style/UIUXStyle";
import applyNEB from "..//..//..//images and videos/2048Gif.gif";

export default function WebProjects() {
  return (
    <>
      <div>
        <Container>
          <Body>
            <ImageNEB src={applyNEB} alt="" />
            <TextContent>
              <Heading> applyNEB </Heading>
              <Text>
                A simple sign up page for students. Contains various +2 colleges
                and their information.
              </Text>
              <Link
                href="https://www.figma.com/proto/pTXCJedcygvquuGyFDNhCt/applyNEB?page-id=0%3A1&node-id=1%3A2&viewport=-4673%2C1045%2C0.58&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1"
                target="._blank"
              >
                {" "}
                Project link{" "}
              </Link>
            </TextContent>
          </Body>
        </Container>
      </div>
    </>
  );
}
