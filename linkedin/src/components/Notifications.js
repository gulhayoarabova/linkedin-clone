import React from "react";
import styled from "styled-components";
import Rightside from "./RightSide";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const notificationList = [
  {
    id: 1,
    text: "Your thursday daily rundown.US economy growth slows,Amazon shuts  Halo;and other top news for you",
    hour: "3h",
  },
  {
    id: 2,
    text: "Wednesday wrapup: Disney escalates Florida feud; Meta's comeback picks up speed; and more news.",
    hour: "12h",
  },
  {
    id: 3,
    text: ": Are you interested in building smart home devices? Moiz Husnain is lowering the barrier for IoT development with Grandeur ",
    hour: "45h",
  },
  {
    id: 4,
    text: " ICT becomes more affordable in Uzbekistan According to the results of the analysis of the cheapest rates of Internet and communication services in 5 categories",
    hour: "67h",
  },
  {
    id: 5,
    text: "useMemo in React.js! New video! 😎 In this video, I'm gonna show you how you can use the useMemo hook in React to optimize your compon",
    hour: "34h",
  },
  {
    id: 6,
    text: "AI ups productivity; Climate tech needs a lot more cash; and other top news for you",
    hour: "11h",
  },
];
const Notifications = () => {
  return (
    <Container>
      <NotificationsWrap>
        <LeftPart>
          <h1>Manage your Notifications</h1>
          <a href="/home">View Settings</a>
        </LeftPart>
          <MiddlePart >
            <Top>
              <button>All</button>
              <button>My posts</button>
              <button>Mentions</button>
            </Top>
        {notificationList.map((el, id) => (
            <Bottom key={id}>
              <img src="/images/github.jpg" alt="" />
              <p>{el.text}</p>
              <div>
                <p>{el.hour}</p>
                <button>
                  <MoreHorizIcon />
                </button>
              </div>
            </Bottom>
        ))}
          </MiddlePart>

        <Rightside />
      </NotificationsWrap>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 80%;
  margin: 0 auto;
`;
const NotificationsWrap = styled.div`
  display: grid;
  grid-template-areas: "leftpart middlepart rightside";
  grid-template-columns: minmax(0, 7fr) minmax(0, 15fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
const LeftPart = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  transition: box-shadow 83ms;
  height: 15%;
  h1 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    color: rgba(14, 13, 13, 0.9);
    font-weight: 600;
    line-height: 1.6rem;
  }
  a {
    color: #0a66c2;
    font-weight: 600;
  }
`;
const MiddlePart = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 0.8rem 1.6rem;
  background-color: #fff;
  border-radius: 0.8rem;
  margin-bottom: 12px;
  button {
    border-radius: 1.99rem;
    font-size: 15px;
    padding: 0.8rem 1.2rem;
    color: rgba(0, 0, 0, 0.6);
    box-shadow: rgba(0, 0, 0, 0.3);
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: none;
    &:nth-child(1) {
      background-color: #057642;
      color: #fff;
    }
  }
`;
const Bottom = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas: "leftpart middlepart rightside";
  grid-template-columns: 1fr 7fr 1fr;
  column-gap: 15px;
  row-gap: 25px;
  padding: 0 0.8rem 0rem 1em;
  background-color: #585858;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  img {
    width: 58px;
    height: 58px;
  }
  p {
    font-size: 14px;
  }
  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 20px;
    p {
      margin: 0;
    }
  }
`;

export default Notifications;
