import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(171, 178, 185, 0.1);
  border-radius: 20px;
  align-items: center;
  width: 1220px;
  height: 250px;
  margin: 50px 0 50px 0;
`;

export const Image2048 = styled.img`
  width: 250px;
  height: 220px;
  border-radius: 30px;
  display: flex;
  align-items: left;
  padding: 10px 20px;
`;

export const ImagedailyRoutine = styled.img`
  width: 250px;
  height: 175px;
  border-radius: 30px;
  display: flex;
  align-items: left;
  padding: 10px 20px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 880px;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: -20px;
  color: #f96f5d;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  padding: 0 30px;
`;

export const Link = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProjectLink = styled.a`
    border: 2px solid #f96f5d;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    margin: 0;
    min-height: 20px;
    min-width: 0;
    outline: none;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 25%;
    margin-left: 3%;

    will-change: transform;
  }

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #f96f5d;
    background-color: #fafafa;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
    font-weight: 500;

  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const GithubLink = styled.a`
    border: 2px solid #fafafa;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    margin: 0;
    min-height: 20px;
    min-width: 0;
    outline: none;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 25%;
    margin-right: 3%;

    will-change: transform;
  }

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #333;
    background-color: #fafafa;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
    font-weight: 500;

  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const ScraperIMG = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 30px;
  display: flex;
  align-items: left;
  padding: 10px 20px;
`;

export const Nolink = styled.a`
  border: 0;
  // border-radius: 20px;
  // color: white;
  // cursor: pointer;
  // font-size: 16px;
  margin: 0;
  min-height: 20px;
  min-width: 0;
  outline: none;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 25%;
  margin-left: 3%;
`;
