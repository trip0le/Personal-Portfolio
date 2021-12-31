import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle
          heading="Services"
          subheading="I'm interested in the following :"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title={"Fullstack Development"}
            desc={
              "Although I had started with HTML, CSS and Vanilla JavaScript, MERN is the techstack I use for making end to end fullstack applications currently, a basic banking system and user authentication system are two such projects."
            }
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title={"Blockchain Enthusiast"}
            desc={
              "Currently I'm learning Blockchain Development. I am working on Ethexchange, a basic banking system, secured by ethereum blockchain. Smart Contracts is being written in solidity and Frontend is being made using React."
            }
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title={"Problem solving with DSA"}
            desc={
              "I'm a Data Structures and Algorithms enthusiast. I resularly solve problems on Leetcode and GeeksForGeeks. I'm have started doing Competitive Programming on CodeChef as well."
            }
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
