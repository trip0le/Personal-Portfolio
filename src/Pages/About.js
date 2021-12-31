import React from "react";
import PText from "../components/PText";
import AboutImg from "../assets/images/about-page-img.jpeg";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  span {
    background-color: var(--deep-dark);
    padding: 0.5rem;
    border-radius: 8px;
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right: {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Titas Nath</span>
            </p>
            <h2 className="about__heading">
              A Frontend Developer and Musician
            </h2>
            <div className="about__info">
              <PText>
                I'm Titas, a 3rd year student currently studying Bachelor of
                Technology in Biotechnology in National Institute of Technology,
                Durgapur. I consider myself an enthusiastic learner and
                inquistive. I'm interested keenly in Frontend Development and in
                the study of biofilms. Apart from my academic background, music
                is that ethereal escape for me whose doors I've never shut in
                life and have tried to polish its bearings for the past 15 
                years. Acrylic painting, creative writing and photography are
                some of my other hobbies.
                <br />
                <br />
                I'm a big admirer of Bengali literature. Ranging from Tagore's classical
                pieces to Joy Goswami's fiery poetry keep me glued to the pages. 
                Mobile Photography is a hobby; playing with landscapes and making
                them reflect on photographic film give me immense joy.
                <br />
                <br />
                A web developer by profession and an out and out artist by heart is all who I am.
                I truly believe that when all the doors of humanity become shut due to worldly 
                cacophony, art speaks!
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={AboutImg} alt="Titas Nath" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={["St. Augustine's Day School, Shyamnagar"]}
            />
            <AboutInfoItem
              title="College"
              items={["National Institute of Technology, Durgapur"]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">skills</h1>
            <AboutInfoItem
              title="Programming Languages"
              items={[
                "C",
                "C++",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Solidity"
              ]}
            />
            <AboutInfoItem
              title="Technical Skills"
              items={[ "MERN", "Blockchain", "DSA"]}
            />
            <AboutInfoItem
              title="Technology used"
              items={["Git", "GitHub", "Ganache"]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
