import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 30vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  // background-color: rgba(171, 178, 185, 0.1);
  // color: #fff;
  color: #f96f5d;
  font-weight: bold;
  font-size: 34px;
  letter-spacing: 2px;
  font-weight: 600px;

  @media (max-width: 768px) {
    // font-weight: bold;
    font-size: 22px;
    letter-spacing: 2px;
    font-weight: 600px;
  }
`;

export const Information = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 2%;
  flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 5px;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  width: 400px;
  height: 150px;
  border-radius: 20px;
  background-color: rgba(171, 178, 185, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0);
    width: 200px;
    height: 50px;
    font-size: 12px;
  }
`;

export const Tel = styled.a`
  text-decoration: none;
  color: white;
  width: 400px;
  height: 150px;
  border-radius: 20px;
  background-color: rgba(171, 178, 185, 0.1);
  display: flex;
  flex-direction: row;
  gap: 5%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  &:hover {
    color: #f96f5d;
  }

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0);
    width: 200px;
    height: 50px;
    font-size: 12px;
  }
`;

export const Mail = styled.a`
  text-decoration: none;
  color: white;
  width: 400px;
  height: 150px;
  border-radius: 20px;
  background-color: rgba(171, 178, 185, 0.1);
  display: flex;
  flex-direction: row;
  gap: 5%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  &:hover {
    color: #f96f5d;
  }

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0);
    width: 200px;
    height: 50px;
    font-size: 9.5px;
  }
`;
