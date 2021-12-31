import React from "react";
import SectionTitle from "./SectionTitle";
import PText from "./PText";
import Button from './Button'
import AboutImg from '../assets/images/about-sec-img.jpeg'
import styled from "styled-components";

const AboutSectionStyle = styled.div `
    padding: 10rem 0;
    .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
    .aboutSection__left,
    .aboutSection__right{
        flex: 1;
    }
    .section-title{
        text-align: left;
    }
    .para{
        margin-top: 2rem;
        margin-left: 0;
    }
    .aboutSection__buttons{
        display: flex;
        align-items: center;
        justify content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
    }

    @media only screen and (max-width: 950px){
        .aboutSection__left{
            flex: 4;
        }
        .aboutSection__right{
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px){
        .container{
            flex-direction: column;
            text-align: center;
        }
        .aboutSection__right,
        .aboutSection__left{
            width: 100%;
        }
        .aboutSection__right{
            margin-top: 3rem;
        }
        .section-title{
            text-align: center;
        }
        .para{
            margin: 0 auto;
            margin-top: 2rem;
        }
        .aboutSection__buttons{
            flex-direction: column;
            gap: 0;
            .button-wrapper,
            a{
                width: 100%;
                text-align: center;
            }
        }
    }
`

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
          <PText>
            I'm Titas, a 3rd year student currently studying Bachelor of Technology in
            Biotechnology at National Institute of Technology, Durgapur.
            I consider myself inquisitive and an enthusiastic learner. I'm
             keenly interested in Fullstack Development and Blockchain Technology.
            Apart from my academic background, music is that ethereal escape for me whose 
            doors I've never shut in life and have tried to polish its bearings for the
            past 15 years. Acrylic painting, creative writing and photography are some of my other hobbies.
          </PText>
          <div className="aboutSection__buttons">
              <Button btnLink="/projects"
              btnText="Works"/>
              <Button btnLink="/about"
              btnText="Read More"
              outline/>
          </div>
        </div>
        <div className="aboutSection__right">
            <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
