import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkItems>
        <li>
          <a href="/home">About</a>
        </li>
        <li>
          <a href="/home">Accessibility</a>
        </li>
        <li>
          <a href="/home">Help Center</a>
        </li>
        <li>
          <a href="/home">Privacy & Policy</a>
        </li>
        <li>
          <a href="/home">Ad Choices</a>
        </li>
        <li>
          <a href="/home">Advertising</a>
        </li>
        <li>
          <a href="/home">Business Service</a>
        </li>
        <li>
          <a href="/home">Get the Linkedin app</a>
        </li>
        <li>
          <a href="/home">More</a>
        </li>
      </LinkItems>
      <CopyRight>
        <div>
          <span>Linkedin</span>
          <img src="/images/home-logo.svg" alt="" />
        </div>
        <p>LinkedIn Corporation © 2023</p>
      </CopyRight>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.div`
 text-align: center;
 margin-bottom: 8px;
 border-radius: 5px;
 position: relative;
 border: none;
 padding: 12px;`;
const LinkItems = styled.ul`
flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  column-gap: 8px;
  a{
    color:#808080;
    font-size: 12px;
    &:hover{
        color:#0a66c2;
    }
    li {
        list-style: none;
  }
  }
  
`;
const CopyRight = styled.div`
display: flex;
p,span{
    font-size:13px;
}
div{
    display: flex;
    align-items:center;
    margin-right: 10px;
    span{
        color: #0a66c2;
        font-weight: 700;
        margin-right: 5px;
    }
    img{
        width: 15px;
        height: 15px;
    }
}
`;
export default Footer;
