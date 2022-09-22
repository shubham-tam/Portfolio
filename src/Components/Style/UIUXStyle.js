import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const ImageNEB = styled.img`
  width: 300px;
  height: 210px;
  border-radius: 25px;
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
  font-weight: bold;
  margin-top: -20px;
  color: #11a1d3;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  padding: 0 30px;
`;

export const Link = styled.a`

    border: 2px solid #11A1D3;
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
    margin-left: 5%;

    will-change: transform;
  }

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: white;
    background-color: #11A1D3;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
