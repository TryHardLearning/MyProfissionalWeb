import React from "react";
import styled from "@emotion/styled";
import FocusButton from "./FocusButton";

import SystemImg from "../images/SystemAnalise/Analise.jpg"

export default function ContactUs() {
  const DefaultContainer = styled.section`
    width: 100%;
    padding: 50px 0;
  `;
  const Title = styled.div`
    text-align: center;
    text-transform: capitalize;
    font-size: 2.4rem;
    font-weight: 600;
  `;
  const Description = styled.div`
    text-align: center;
    text-transform: capitalize;
    font-size: 1.7rem;
    font-weight: 600;
    color: #a0a0a0;
    margin-top: 1.3rem;
    margin-bottom: 4.5rem;
  `;
  const Body = styled.div`
    padding: 4rem;
    margin: auto;
  `;
  const AboutUsContainer = styled.section`
    display: flex;
    height: 100%;
    color: #000;
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 2rem;
  `;
  const Information = styled.h3`
    font-size: 1.8rem;
    font-weight: 400;
    opacity: 0.8;
    overflow: hidden;
  `;
  const Right = styled.div`
    width: 64%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: rgba(30, 30, 30, 1);
  `;
  const MyImg = styled.img`
    width: 100%;
    height: 428px;
    border-radius: 8px;
    border-right: 3px solid transparent;
      border-bottom: 3px solid transparent;
  
    transition: 1s;
    object-fit: fit;
    &:hover{
      border-right: 3px solid var(--primary);
      border-bottom: 3px solid var(--primary);
    }
  `;
  const FocusData = styled.aside`
    display: flex;
    width: 440px;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  `;

  return (
    <DefaultContainer id="contactus">
      <Title>Contact us</Title>
      <Description>Request Our Services</Description>
      <Body>
        <AboutUsContainer>
          <Right>
            <MyImg src={SystemImg} />
          </Right>
          <Left>
            <FocusButton href="https://www.linkedin.com/in/lucas-c-bresolino/" theTextInside={"Linkedin"} />
            <FocusButton href="https://github.com/TryHardLearning" theTextInside={"GitHub"} />
            <FocusButton href="https://wa.me/46988301339" theTextInside={"WhatsApp"} />

          </Left>
          
        </AboutUsContainer>
      </Body>
    </DefaultContainer>
  );
}
