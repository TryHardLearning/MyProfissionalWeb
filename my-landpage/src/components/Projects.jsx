import React from "react";
import styled from "@emotion/styled";
import DefaultImage from "../images/code.png"
import Project from "./Project";
import AllMyProjects from '../Data';

export default function Projects() {
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
    margin-top: 1.7rem;
    margin-bottom: 4.5rem;
  `;
  const Body = styled.div`
    padding: 4rem;
    margin: auto;
  `;
  const ProjectContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Filters = styled.nav`
    background-color: transparent;
    display: inline-block;
  `;
  const NavLink = styled.ul`
    list-style: none;
  `;
  const Link = styled.li`
    display: inline-block;
    padding: 10px;
    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: 400;
    color: #000;
    border-left: 2px solid var(--primary);
    border-bottom: 2px groove var(--primary);
    border-top: 2px groove var(--primary);
    cursor: pointer;
    trasition: 0.3s;
    &:hover {
      color: var(--primary);
    }
    &:last-child {
      border-right: 2px solid var(--primary);
    }
  `;
  const MyProjects = styled.section`
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;
  const ProjectDeveloped = styled.div`
    width: 260px;
    height: 180px;
    margin: 10px;
  `;
  const ImgWrap = styled.div`
    width: inherit;
    height: inherit;
    overflow: hidden;
  `;
  const ProjectImge = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;
  const ProjectInfo = styled.a`
    position: absolute;
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.55);
    &:hover {
      box-shadow: 0 0 22px #000;
      background: rgba(0, 0, 0, 08);
    }
  `;
  const ProjectName = styled.h5`
    font-size: 1.7rem;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
    color: var(--primary);
    
  `;
  const ProjectDescription = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
    text-transform: capitalize;
  `;
  return (
    <DefaultContainer id="projects">
      <Title>Our Projects</Title>
      <Description>What we create</Description>
      <Body>
        <ProjectContainer>
          <Filters>
            <NavLink>
              <Link class="active">All</Link>
              <Link>Web</Link>
              <Link>Mobile</Link>
              <Link>Cloud</Link>
              <Link>Machine Learning</Link>
              <Link>Database</Link>
            </NavLink>
          </Filters>
        </ProjectContainer>
        <MyProjects>

          {AllMyProjects.map((project, index) => (
            <Project
              key={index}
              Name={project.Name}
              Description={project.Description}
              Link={project.Link}
            />
          ))}

        </MyProjects>
      </Body>
    </DefaultContainer>
  );
}
