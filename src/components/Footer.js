import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright{
      background-color: var(--deep-bg);
      text-align: left;
      padding: 1rem 0;
      margin-top: 5rem;
      .para{
          margin-left: 0;
      }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Titas Nath</h1>
          <PText>
            Have a project in mind ? Do you think I can help you out ? Get in touch !
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+917044127586",
                path: "mob:+917044127586",
              },
              {
                title: "titasnath4@gmail.com",
                path: "mailto:titasnath4@gmail.com",
              },
              {
                title: "Shyamnagar, West Bengal, India",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Media"
            links={[
              {
                title: "GitHub",
                path: "https://github.com/trip0le",
              },
              {
                title: "YouTube",
                path:
                  "https://www.youtube.com/channel/UCgRmCZTbrFKAiiHH6wMz4Dg",
              },
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/titas-nath-54ab191b3/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
      <div className="container">
          <PText>
            © 2021 - Titas Nath | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="https://github.com/trip0le">
              trip0le
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyles>
  );
}
