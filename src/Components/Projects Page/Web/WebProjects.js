import React from "react";
import {
  Container,
  Body,
  Image2048,
  ImagedailyRoutine,
  ScraperIMG,
  Heading,
  TextContent,
  Text,
  Link,
  ProjectLink,
  // Nolink,
  GithubLink,
} from "..//..//Style/WebStyle";
import to48 from "..//..//..//images and videos/2048Gif.gif";
import dailyRoutine from "..//..//..//images and videos/dailyTracker.png";
import portfolio from "..//..//..//images and videos/portfolio.png";
import DOMArray from "..//..//..//images and videos/DOMarray.png";
import formValidator from "..//..//..//images and videos/formValidator.png";
import scraper from "..//..//..//images and videos/scraper.png";

export default function WebProjects() {
  return (
    <>
      <div>
        <Container>
          {/* 2048 */}
          <Body>
            <Image2048 src={to48} alt="" />
            <TextContent>
              <Heading> 2048 Game </Heading>
              <Text>
                A 2048 game made with ReactJS. The user has the capability of
                starting a new game, undo a move and can also see the score and
                the step count.
              </Text>
              <Link>
                <ProjectLink
                  href="https://shubham2048.netlify.app/"
                  target="._blank"
                >
                  {" "}
                  Project link{" "}
                </ProjectLink>

                <GithubLink
                  href="https://github.com/shubham-tam/2048-game"
                  target="._blank"
                >
                  {" "}
                  Github link{" "}
                </GithubLink>
              </Link>
            </TextContent>
          </Body>

          {/* Daily Routine */}
          <Body>
            <ImagedailyRoutine src={dailyRoutine} alt="" />
            <TextContent>
              <Heading> Daily Routine Tracker </Heading>
              <Text>
                A simple tracker where there is a clock, to do list and a
                calorie tracker. The project uses the concept of React Hooks
                (useContext, useState, useReducer).
              </Text>
              <Link>
                <ProjectLink
                  href="https://dailyroutine4me.netlify.app/"
                  target="._blank"
                >
                  {" "}
                  Project link{" "}
                </ProjectLink>

                <GithubLink
                  href="https://github.com/shubham-tam/daily_routine"
                  target="._blank"
                >
                  {" "}
                  Github link{" "}
                </GithubLink>
              </Link>
            </TextContent>
          </Body>

          {/* Portfolio */}
          <Body>
            <ImagedailyRoutine src={portfolio} alt="" />
            <TextContent>
              <Heading> Portfolio </Heading>
              <Text>My portfolio site.</Text>
              <Link>
                <noLink
                  href="https://dailyroutine4me.netlify.app/"
                  target="._blank"
                >
                  {" "}
                  {/* Project link{" "} */}
                </noLink>

                <GithubLink
                  href="https://github.com/shubham-tam/Portfolio"
                  target="._blank"
                >
                  {" "}
                  Github link{" "}
                </GithubLink>
              </Link>
            </TextContent>
          </Body>

          {/* DOM Araay */}

          <Body>
            <ImagedailyRoutine src={DOMArray} alt="" />
            <TextContent>
              <Heading> DOM Array Methods </Heading>
              <Text>
                A project I did when I started out with JavaScript. It uses an
                API to fetch random name and numebers. Uses features like add,
                array functions like filter, map.
              </Text>
              <Link>
                <ProjectLink
                  href="https://dom-arrayy.netlify.app/"
                  target="._blank"
                >
                  {" "}
                  Project link{" "}
                </ProjectLink>

                <GithubLink
                  href="https://github.com/shubham-tam/JS-DOM-array-"
                  target="._blank"
                >
                  {" "}
                  Github link{" "}
                </GithubLink>
              </Link>
            </TextContent>
          </Body>

          {/* Form Validator */}

          <Body>
            <ImagedailyRoutine src={formValidator} alt="" />
            <TextContent>
              <Heading> Form Validator </Heading>
              <Text>
                A HTML, CSS based project. Gives errros on wrong input fields to
                the user.
              </Text>
              <Link>
                <ProjectLink
                  href="https://form-validator-simple.netlify.app/"
                  target="._blank"
                >
                  {" "}
                  Project link{" "}
                </ProjectLink>

                <GithubLink
                  href="https://github.com/shubham-tam/form_validator"
                  target="._blank"
                >
                  {" "}
                  Github link{" "}
                </GithubLink>
              </Link>
            </TextContent>
          </Body>

          {/* Web Scrapping */}
          <Body>
            <ScraperIMG src={scraper} alt="" />
            <TextContent>
              <Heading> Web Scrapping - Daraz </Heading>
              <Text>
                A web scrapper built with Puppeteer. This lets you type the
                desired target (product) and fetch the name, price and the image
                url of the 1st page and saves as a txt file.
              </Text>
              <Link>
                <noLink href="https://dom-arrayy.netlify.app/" target="._blank">
                  {" "}
                  {/* Project link{" "} */}
                </noLink>

                <GithubLink
                  href="https://github.com/shubham-tam/daraz-web.scrapper"
                  target="._blank"
                >
                  {" "}
                  Github link{" "}
                </GithubLink>
              </Link>
            </TextContent>
          </Body>
        </Container>
      </div>
    </>
  );
}
