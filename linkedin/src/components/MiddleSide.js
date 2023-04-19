import React from "react";
import styled from "styled-components";
const MiddleSide = () => {
  return (
    <Container>
      <ShareBox>
        {/* Share */}
        <div>
          <img src="/images/userimg.jpg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/icons8-picture.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/icons8-video-24.png" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/icons8-today-24.png" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/icons8-article-32.png" alt="" />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/userimg.jpg" alt="" />
            <div>
              <span>Gulhayo Arabova</span>
              <span>Frontend Developer | Lead @ TEDxTMC Institute</span>
              <span>7 mo . <img src="/images/icons8-globe-24.png" alt="gloveimg" width={10} height={10}/> </span>
            </div>
            </a>
            <button>
              <img src="/images/icons8-ellipsis-48.png" alt="" />
            </button>
          </SharedActor>
          <Description>UniSat is an exciting competition for girls in Uzbekistan where you will learn a lot about space technologies, radio electronics, programming, technologies for receiving and processing Earth images from space and satellite meteorology. </Description>
          <SharedImg>
           <img src="/images/unisat.jpg" alt="" />
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/like.png" alt="" />
                <img src="/images/curious.png" alt="" />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like.png" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/icons8-comments-48 (1).png" alt="" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/icons8-repeat-30.png" alt="" />
              <span>Repost</span>
            </button>
            <button>
              <img src="/images/icons8-email-send-24.png" alt="" />
              <span>Share</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: #fff;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;
      img {
        width: 48px;
  height:48px;
  border-radius: 50%;
  margin-right: 10px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
        &:first-child {
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
padding-right:40px ;
flex-wrap: nowrap;
padding:12px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
a{
  margin-right: 12px;
  flex-grow: 1;
  overflow: hidden;
  display:flex;
  text-decoration:none;


img{
  width: 48px;
  height:48px;
  border-radius: 50%;
}
& > div {
display:flex;
flex-direction: column;
flex-grow:1;
flex-basis:zero;
margin-left:8px;
overflow: hidden;
span{
  text-align: left;
  &:first-child{
    font-size: 14px;
    font-weight: 700px;
    color:rgba(0, 0, 0, 1)
  }
  &:nth-child(n+1){
    font-size: 12px;
    color:rgba(0, 0, 0, 0.6)
  }
  &:nth-child(n+3){
    display: flex;
    align-items: center;
    img{
      width: 15px;
      height: 15px;
    }
  }
}
}
}
button{
  position:absolute;
  right:12px;
  top:0;
  background: transparent;
  border:none;
  outline:none;
  img{
  height:25px;
  width:25px;
  }

}
`
const Description = styled.div`
padding:0 16px;
overflow:hidden;
color:rgba(0, 0, 0, 0.9);
font-size: 14px;
text-align:left;
`
const SharedImg = styled.div`
margin-top: 8px;
width:100%;
display: block;;
position:relative;
background-color: #f9fafb;
img{
  object-fit: contain;
  width:100%;
  height:100%;
}
`
const SocialCounts = styled.ul`
  line-height: 1.3;
  display:flex;
  align-items:center;
  justify-content: space-between;
  overflow:auto;
  margin:0 16px;
  padding:8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li{
    margin-right:5px;
    font-size: 12px;
    button{
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      outline:none;
      
      img{
        height: 18px;
        width: 18px;
      }
    }
  }

`
const SocialActions = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin:0;
min-height:40px;
padding:4px 8px;
button{
  display:inline-flex;
  align-items:center;
  padding:8px;
  color:#0a66c2;
  background-color: transparent;
  border:none;
  outline:none;
  cursor:pointer;
  img{
    height: 24px;
    width: 24px;
  }
  @media(min-width:768px){
    span{
      margin-left:8px;
    }
  }


}
`
export default MiddleSide;
