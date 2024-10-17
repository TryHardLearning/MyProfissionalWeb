import React from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import FocusImage from "../images/meee.jpg";
import FocusButton from "./FocusButton";

export default function UboutUs() {
  const DefaultContainer = styled.section`
    width: 100%;
    padding: 50px 0;
  `;
  const Title = styled.div`
    text-align: center;
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 600;
  `;
  const Description = styled.div`
    text-align: center;
    text-transform: capitalize;
    font-size: 1.3rem;
    font-weight: 600;
    color: #ccc;
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
    width: 34%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: rgba(30, 30, 30, 1);
  `;
  const MyImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    opacity: 0.7;
    transition: 1s;
    object-fit: cover;

    &:hover {
      opacity: 0.9;
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
    <DefaultContainer>
      <Title>About us</Title>
      <Description>who I am?</Description>
      <Body>
        <AboutUsContainer>
          <Left>
            <Information>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              volutpat ullamcorper urna, sit amet vehicula felis vehicula
              egestas. Ut mattis urna id tempus vestibulum. Vestibulum lacinia
              eget enim a sagittis. Morbi sed massa eu ligula condimentum
              aliquet at sed felis. Vivamus ut auctor sem. Cras maximus quis
              erat a gravida. Duis quam eros, porta sed mauris et, porttitor
              dapibus purus. Duis sit amet augue vitae sem ultricies pharetra.
              Aliquam viverra, neque at lacinia volutpat, erat erat suscipit
              leo, nec tincidunt odio mi eu ligula.
            </Information>
            <FocusData>
              <FocusButton href="#" theTextInside={"Curriculum"} />
              <FocusButton href="#" theTextInside={"GitHub"} />
              <FocusButton href="#" theTextInside={"Linkedin"} />
            </FocusData>
          </Left>
          <Right>
            <MyImg src={FocusImage} />
          </Right>
        </AboutUsContainer>
      </Body>
    </DefaultContainer>
  );
}
